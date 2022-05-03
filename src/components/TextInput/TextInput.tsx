import "./TextInput.css";

/**
 * Global non-domain-based element
 */
const PrimaryButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...buttonProps
}) => {
  return (
    <button
      data-testid="primary-button"
      className="primary-button"
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
