"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, User, ShoppingBag } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Início",
    icon: Home,
  },
  {
    href: "/projetos",
    label: "Projetos",
    icon: ShoppingBag,
  },
  {
    href: "/clients",
    label: "Clientes",
    icon: Briefcase,
  },
  {
    href: "/about",
    label: "Sobre",
    icon: User,
  },
];

interface MainNavProps {
  isMobile?: boolean;
}

export function MainNav({ isMobile }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn(
      "flex gap-1",
      isMobile ? "flex-col w-full" : "items-center"
    )}>
      {routes.map((route) => {
        const Icon = route.icon;
        const isActive = pathname === route.href;
        
        return (
          <Button
            key={route.href}
            variant={isActive ? "default" : "ghost"}
            asChild
            className={cn(
              "w-full justify-start",
              isActive && "bg-primary text-primary-foreground"
            )}
          >
            <Link href={route.href} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="font-medium">{route.label}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}