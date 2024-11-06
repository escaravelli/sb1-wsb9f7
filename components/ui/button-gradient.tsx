"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 text-primary-foreground shadow hover:shadow-lg",
        destructive:
          "bg-gradient-to-r from-destructive to-red-600 hover:from-destructive/90 hover:to-red-600/90 text-destructive-foreground shadow-sm hover:shadow-lg",
        outline:
          "border-2 border-input bg-transparent hover:bg-accent hover:text-accent-foreground shadow-sm",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary hover:from-secondary/80 hover:to-secondary/80 text-secondary-foreground shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl",
        shine:
          "relative bg-gradient-to-r from-primary to-primary text-primary-foreground overflow-hidden shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    if (variant === "shine") {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <motion.span
              className="absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "linear",
              }}
            />
          </span>
          {loading ? (
            <span className="flex items-center gap-2">
              <motion.span
                className="inline-block h-4 w-4 rounded-full border-2 border-current border-r-transparent"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
              />
              Loading...
            </span>
          ) : (
            props.children
          )}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <motion.span
              className="inline-block h-4 w-4 rounded-full border-2 border-current border-r-transparent"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />
            Loading...
          </span>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);

ButtonGradient.displayName = "ButtonGradient";

export { ButtonGradient, buttonVariants };