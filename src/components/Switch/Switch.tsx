import classnames from "classnames";
import { ReactNode } from "react";
import "./Switch.css";

interface SwitchWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: string;
}

const SwitchWrapper = ({
  children,
  label,
  ...htmlProps
}: SwitchWrapperProps) => {
  return (
    <>
      <label htmlFor={htmlProps.id}>
        <b>{label}</b>
      </label>
      <div className="switch" {...htmlProps}>
        {children}
      </div>
    </>
  );
};

interface SwitchItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isActive: boolean;
}

const SwitchItem = ({ isActive, children, ...htmlProps }: SwitchItemProps) => {
  return (
    <div
      className={classnames("switch__item", {
        "switch__item--active": isActive,
      })}
      {...htmlProps}
    >
      {children}
    </div>
  );
};

const Switch = {
  Wrapper: SwitchWrapper,
  Item: SwitchItem,
};

export default Switch;
