function SortableItem(params) {
  console.log(params);
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>hi</p>
      {params.id}
    </div>
  );
}
export default SortableItem;
