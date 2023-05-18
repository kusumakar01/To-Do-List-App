import CheckBox from "./CheckBox";
import ItemContent from "./ItemContent";

function ListItem(props) {
  return (
    <div className="item">
      <CheckBox properties={props} />
      <ItemContent properties={props} />
      <button onClick={props.remove}>Delete</button>
    </div>
  );
}

export default ListItem;