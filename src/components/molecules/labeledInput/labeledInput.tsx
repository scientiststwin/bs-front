import Input, { InputProps } from '../../atoms/input/input';
import Label, { LabelProps } from '../../atoms/label/label';

type LabeledInputProps = InputProps & LabelProps;

const LabeledInput: React.FC<LabeledInputProps> = (props) => {
  return (
    <div className='space-x-8'>
      <Label text={props.text} />
      <Input type={props.type} onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default LabeledInput;
