type ButtonProps = {
  text: string;
  color: 'orange' | 'yellow';
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="bg-orange-500 text-gray-800 border-2 border-gray-500 rounded-2xl min-w-48 h-10 text-xl font-syne"
    >
      {props.text}
    </button>
  );
};

export default Button;
