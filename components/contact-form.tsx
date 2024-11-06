"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  Nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  empresa: z.string().optional(),
  website: z.string().optional(),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  tipoprojeto: z.string().min(1, "Selecione um serviço"),
  sobreoprojeto: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  noWebsite: z.boolean().default(false),
});

const services = [
  "Landing Page Premium",
  "Site Institucional",
  "E-commerce Completo",
  "App Basic",
  "App Pro",
  "App Enterprise",
  "Plano de Manutenção Básico",
  "Plano de Manutenção Premium",
  "Plano de Manutenção Enterprise",
  "Outro",
];

interface ContactFormProps {
  selectedService?: string;
}

export function ContactForm({ selectedService }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nome: "",
      empresa: "",
      website: "",
      email: "",
      telefone: "",
      tipoprojeto: selectedService || "",
      sobreoprojeto: "",
      noWebsite: false,
    },
  });

  useEffect(() => {
    const storedService = localStorage.getItem('selectedService');
    if (storedService) {
      form.setValue('tipoprojeto', storedService);
      localStorage.removeItem('selectedService');
    }
  }, [form]);

  const noWebsite = form.watch("noWebsite");

  useEffect(() => {
    if (noWebsite) {
      form.setValue("website", "");
    }
  }, [noWebsite, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      localStorage.setItem('formData', JSON.stringify(values));
      
      const response = await fetch('https://databases-nocodb.wgprvr.easypanel.host/api/v2/tables/mhfo58vchmbvvzm/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': 'iS2DwqPikqJgCkW9d9mZwBiqxOcIzLDXOdrOmdVn',
        },
        body: JSON.stringify({
          Nome: values.Nome,
          empresa: values.empresa || 'N/A',
          website: values.noWebsite ? 'Não possui site' : (values.website || 'N/A'),
          email: values.email,
          telefone: values.telefone,
          tipoprojeto: values.tipoprojeto,
          sobreoprojeto: values.sobreoprojeto,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      toast.success("Mensagem enviada com sucesso!");
      
      router.push(
        `/obrigado?name=${encodeURIComponent(values.Nome)}&service=${encodeURIComponent(values.tipoprojeto)}`
      );
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="Nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome*</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da sua empresa (opcional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="noWebsite"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Não tenho site</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu website atual (opcional)" 
                      {...field} 
                      disabled={noWebsite}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone*</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="tipoprojeto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Projeto*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sobreoprojeto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobre o Projeto*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva seu projeto ou necessidade"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonRainbow type="submit" className="w-full rainbow-button" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </ButtonRainbow>
        </form>
      </Form>
    </Card>
  );
}