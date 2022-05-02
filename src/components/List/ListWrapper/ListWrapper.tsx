import './ListWrapper.css'

export interface ListWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * As a general rule, the ListWrapper component
 * should be used to wrap the ListItem component.
 */
const ListWrapper = ({ children, ...htmlProps }: ListWrapperProps) => {
  return (
    <div className="list-container" {...htmlProps}>
      {children}
    </div>
  );
}

export default ListWrapper;