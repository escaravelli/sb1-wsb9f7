"use client";

import { motion } from "framer-motion";
import { HomeIcon, BookOpen, GithubIcon, LinkedinIcon, Code2, DollarSignIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: HomeIcon, label: "Home", href: "/" },
  { icon: BookOpen, label: "Blog", href: "https://blog.elvio.com.br/", external: true },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/elviosc/", external: true },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/elviosc", external: true },
  { icon: Code2, label: "SemCodigoBR", href: "https://semcodigobr.com.br/", external: true },
  { icon: DollarSignIcon, label: "Orçamento", href: "/contato", highlight: true },
];

export function DockMenu() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 pointer-events-none"
    >
      <div className="bg-background/80 backdrop-blur-lg rounded-full p-2 shadow-lg border border-border pointer-events-auto">
        <div className="flex items-center gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = !item.external && pathname === item.href;
            
            const linkContent = (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : item.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            );

            return (
              <div key={item.href} className="relative group">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link href={item.href}>
                    {linkContent}
                  </Link>
                )}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm whitespace-nowrap border border-border shadow-sm">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}