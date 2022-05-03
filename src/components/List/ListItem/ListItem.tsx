import "./ListItem.css";

export interface ListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  imgUrl: string;
  subtitle: string;
  trailingSpec: string;
  leadingSpec: string;
}

const ListItem = ({
  title,
  subtitle,
  trailingSpec,
  leadingSpec,
  imgUrl,
  ...buttonProps
}: ListItemProps) => {
  return (
    <button className="list-item" {...buttonProps}>
      <div className="list-item__image-container">
        <img
          aria-hidden
          className="list-item__image"
          alt="item-image"
          src={imgUrl}
        />
      </div>
      <div aria-hidden className="list-item__title">
        <h3>{title}</h3>
      </div>
      <div aria-hidden className="list-item__leading">
        <small>
          <b>{leadingSpec}</b>
        </small>
      </div>
      <div aria-hidden className="list-item__subtitle">
        {subtitle}
      </div>
      <div aria-hidden className="list-item__trailing">
        <small aria-hidden>{trailingSpec}</small>
      </div>
    </button>
  );
};

export default ListItem;
