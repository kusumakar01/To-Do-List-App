function CheckBox(props) {
  return (
    <input
      type="checkbox"
      checked={
        props.properties.done.findIndex(
          (element) => element === props.properties.index
        ) !== -1
      }
      onChange={() => props.properties.toggleDone(props.properties.index)}
    />
  );
}

export default CheckBox;