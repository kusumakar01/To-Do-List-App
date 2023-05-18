function ItemContent(props) {
  return (
    <span
      className={
        props.properties.done.findIndex(
          (element) => element === props.properties.index
        ) === -1
          ? ""
          : "striked"
      }
      onKeyDown={(event) => {
        if (event.key === "Enter") event.target.blur();
      }}
      onBlur={(event) => {
        props.properties.update(props.properties.index, event.target.innerText);
      }}
      contentEditable
      suppressContentEditableWarning={true}
      spellCheck={false}
    >
      {props.properties.task}
    </span>
  );
}

export default ItemContent;