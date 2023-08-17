import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const filteredTasks = useSelector((state) => state.todo.filteredTasks);
  const tasks = useSelector((state) => state.todo.tasks);

  return (
    <ul
      className={
        "m-10 grid justify-center " +
        (filteredTasks.length !== 0 &&
          (filteredTasks.length > 4 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-col-1 lg:grid-cols-1"))
      }>
      {filteredTasks.length !== 0 ? (
        filteredTasks.map((task) => <TodoItem item={task} key={task.id} />)
      ) : (
        <p className="text-3xl text-indigo-600 animate-bounce font-bold lowercase">
          {tasks.length === 0 ? `Nothing To Do :)` : `No Tasks Found :(`}
        </p>
      )}
    </ul>
  );
}
