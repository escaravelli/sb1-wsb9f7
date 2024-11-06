"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappNumber = "+5511941565335";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}