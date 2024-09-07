import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: 'px-6 py-3 font-bold flex items-center justify-center gap-3 rounded-full',

    variants: {
        variant: {
            primary: 'bg-indigo-800 text-white hover:bg-indigo-900',
            secondary: 'bg-[#1A1A1A] text-zinc-50 hover:bg-zinc-800 text-white'
        },

        size: {
            sm: 'w-[110px]',
            md: 'w-[268px]',
            fit: 'w-fit',
            full: 'w-full'
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'full'
    }
})

interface IButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button ({ children, variant, size, ...rest }: IButtonProps) {
  return (
    <button {...rest} className={buttonVariants({ variant, size })} >
        {children}
    </button>
  );
}