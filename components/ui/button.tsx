/* eslint-disable react-refresh/only-export-components -- variants are exported with components */
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-[opacity,transform,background-color,color] duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-11 px-5',
        icon: 'size-10',
        lg: 'h-12 px-8',
        sm: 'h-9 px-4',
      },
      variant: {
        default: 'btn-gradient hover:opacity-90',
        destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
        ghost: 'hover:bg-secondary hover:text-secondary-foreground',
        link: 'text-foreground underline-offset-4 hover:underline',
        outline: 'border border-border bg-transparent hover:bg-secondary',
        secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
      },
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  size,
  variant,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
