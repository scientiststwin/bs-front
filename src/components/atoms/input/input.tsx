import { twMerge } from 'tailwind-merge'

export type InputProps = {
    type: string
    value: string
    placeholder?: string
    onChange: (event: any) => void
    className?: string
}

const Input: React.FC<InputProps> = (props) => {
    const inputStyle = twMerge(
        'border-2 border-gray-500 rounded-2xl min-w-[406px] h-10 outline-none px-2 font-syne shadow-[10px_35px_60px_-15px_rgba(236,166,60,0.3)]',
        props.className
    )

    return (
        <input
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={inputStyle}
        />
    )
}

export default Input
