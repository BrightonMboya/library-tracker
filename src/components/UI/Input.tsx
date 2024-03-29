interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: any;
  classes?: string;
}

const Input = ({
  label,
  placeholder,
  type,
  onChange,
  value,
  classes,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type={type}
        className={`${classes} w-[250px] rounded-md  bg-grey px-2 py-2  focus:outline-none`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
