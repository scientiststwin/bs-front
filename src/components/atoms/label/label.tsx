export type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = (props) => {
  return (
    <label className="text-gray-600 font-syne">
      {props.text}
    </label>
  );
};

export default Label;
