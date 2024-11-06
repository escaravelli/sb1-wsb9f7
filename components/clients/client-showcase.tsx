"use client";

import { motion } from "framer-motion";
import { ClientCard } from "@/components/clients/client-card";
import { projects } from "@/lib/projects";

export function ClientShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ClientCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}