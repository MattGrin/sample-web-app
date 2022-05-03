import "./TextInput.css";

/**
 * Global non-domain-based element
 */
const TextInput: React.FC<React.HTMLProps<HTMLInputElement>> = (inputProps) => {
  return (
    <input type="text" maxLength={30} className="text-input" {...inputProps} />
  );
};

export default TextInput;
