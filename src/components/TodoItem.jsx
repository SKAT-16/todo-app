import { useDispatch } from "react-redux";
import applyICO from "../assets/Apply.png";
import deleteICO from "../assets/Delete.png";
import editICO from "../assets/edit.png";
import { completeTodo, deleteTodo, selectTodo } from "../features/todoSlice";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.name === "delete") dispatch(deleteTodo(item.id));
    else if (e.target.name === "complete") dispatch(completeTodo(item.id));
    else if (e.target.name === "edit") dispatch(selectTodo(item.id));
  };

  return (
    <li
      className="flex items-center justify-between shadow-md cursor-pointer rounded-lg w-[300px] mb-5 md:mr-5 group hover:shadow-lg hover:scale-105 duration-300 ease-in-out">
      <div className="ml-3 md:my-1">
        <h4
          className={`text-green-300 text-2xl md:text-3xl mb-2 group-hover:text-white ${
            item.completed ? "line-through" : "underline"
          }`}>
          {item.title}
        </h4>
        <h3
          className={`text-green-300 leading-3 text-sm md:text-md w-40 group-hover:text-white ${
            item.completed && "line-through"
          }`}>
          {item.description}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-2">
        <img
          src={applyICO}
          alt="finish-icon"
          className="bg-green-500 rounded-xl scale-75 md:scale-[80%] px-2 py-1 mr-1 md:hover:scale-105 duration-200 ease-in-out"
          name="complete"
          onClick={handleClick}
        />
        <img
          src={deleteICO}
          alt="delete-icon"
          className="bg-red-500 rounded-xl scale-75 md:scale-[80%] px-2 py-1 mr-1 md:hover:scale-105 duration-200 ease-in-out"
          name="delete"
          onClick={handleClick}
        />
        <img
          src={editICO}
          alt="edit-icon"
          className="bg-blue-500 rounded-xl scale-75 md:scale-[80%] px-2 py-1 mr-1 md:hover:scale-105 duration-200 ease-in-out"
          name="edit"
          onClick={handleClick}
        />
      </div>
    </li>
  );
}
