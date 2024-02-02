type ButtonProps = {
    text: string
    color: 'orange' | 'yellow'
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    const buttonBGColor =
        props.color === 'orange' ? 'bg-orange-500' : 'bg-yellow-500'
    const className = `text-gray-800 border-2 border-gray-500 rounded-2xl min-w-48 h-10 text-xl font-syne ${buttonBGColor}`

    return (
        <button type="button" onClick={props.onClick} className={className}>
            {props.text}
        </button>
    )
}

export default Button
