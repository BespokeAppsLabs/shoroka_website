"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const shorokaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:scale-[1.02] border border-primary",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-border hover:bg-secondary/80",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "border-0 hover:bg-accent/10 hover:text-accent",
        gold: "bg-[#C7A963] text-black shadow-sm hover:shadow-md hover:bg-[#C7A963]/90 hover:scale-[1.02] border border-transparent",
      },
      size: {
        default: "h-12 px-8 py-3 text-sm",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-12 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ShorokaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof shorokaButtonVariants> {
  asChild?: boolean;
}

const ShorokaButton = React.forwardRef<HTMLButtonElement, ShorokaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(shorokaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
ShorokaButton.displayName = "ShorokaButton";

export { ShorokaButton, shorokaButtonVariants };
