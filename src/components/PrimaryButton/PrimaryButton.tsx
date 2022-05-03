import classnames from "classnames";
import "./PrimaryButton.css";

/**
 * Global non-domain-based element
 */
const PrimaryButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={classnames("primary-button", className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
