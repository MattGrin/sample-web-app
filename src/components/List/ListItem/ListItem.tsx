import './ListItem.css'

export interface ListItemProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  imgUrl: string;
  subtitle: string;
  trailingSpec: string;
  leadingSpec: string;
}




const ListItem = ({title, subtitle, trailingSpec, leadingSpec, imgUrl, ...buttonProps}: ListItemProps) => {

  return (
    <button className="list-item" {...buttonProps}>
      <img aria-hidden className="list-item__image"
        alt="item-image"
        src={imgUrl} />
      <div aria-hidden className="list-item__title"><h3>{title}</h3></div>
      <div aria-hidden className="list-item__level"><small><b>{leadingSpec}%</b></small></div>
      <div aria-hidden className="list-item__tagline">{subtitle}</div>
      <div aria-hidden className="list-item__contributor">
        <small aria-hidden >{trailingSpec}</small>
      </div>
    </button>
  );
}

export default ListItem;