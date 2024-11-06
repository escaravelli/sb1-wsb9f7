"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
  animate?: boolean;
}

export function Grid({
  children,
  cols = 3,
  gap = 6,
  className,
  animate = true,
  ...props
}: GridProps) {
  const gridClassName = cn(
    `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-${gap}`,
    className
  );

  if (!animate) {
    return (
      <div className={gridClassName} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={gridClassName}
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  aspectRatio?: "square" | "video" | "auto";
}

export function GridItem({
  children,
  className,
  aspectRatio = "auto",
  ...props
}: GridItemProps) {
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden bg-card",
        aspectRatioClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}