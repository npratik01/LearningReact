import TodoItem from "./ToDoItem";

const multiItems = ({ TodoItems }) => {
  return (
    <>
      <div className="items-container">
        {TodoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
      </div> 
    </>
  );
};

export default multiItems;
