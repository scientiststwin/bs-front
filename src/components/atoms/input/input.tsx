export type InputProps = {
  type: string;
  value: string;
  onChange: (event: any) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      className="border-2 border-gray-500 rounded-2xl min-w-[406px] h-10 outline-none px-2 font-syne font-syne"
    />
  );
};

export default Input;
  