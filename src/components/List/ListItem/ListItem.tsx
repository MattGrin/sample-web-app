import './ListItem.css'

const ListItem = (props: any) => {

  const sanitizedContributor = props.contributed_by.match(/([a-zA-Z0-9]+)(>)/g)[0].replace(/>/g, '');
  const sanitizedAriaLabel = `${props.name} with ${props.abv} alcohol percent by volume, contributed by ${sanitizedContributor}`;

  return (
    <button className="list-item" aria-label={sanitizedAriaLabel}>
      <img aria-hidden className="list-item__image"
        alt="beer"
        src="https://assets.jumpseller.com/store/beer-square/themes/284927/options/22224011/founders_20220103.jpg?1641217025" />
      <div aria-hidden className="list-item__title"><h3>{props.name}</h3></div>
      <div aria-hidden className="list-item__level"><small><b>{props.abv}%</b></small></div>
      <div aria-hidden className="list-item__tagline">{props.tagline}</div>
      <div aria-hidden className="list-item__contributor">
        <small aria-hidden >{sanitizedContributor}</small>
      </div>
    </button>
  );
}

export default ListItem;