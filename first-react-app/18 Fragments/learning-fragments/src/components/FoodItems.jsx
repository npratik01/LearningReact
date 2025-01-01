import Item from "./Items";

function FoodItems() {
  // let foodItems = [];
  let foodItems = ["roti", "paratha", "chicken", "salad", "vegetables"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
