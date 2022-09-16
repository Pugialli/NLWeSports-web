import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function WeekButton(props: ButtonProps) {
    return (
        <button
            {...props}
            className='w-8 h-8 rounded bg-zinc-900 '
        >
        </button>
    )
}