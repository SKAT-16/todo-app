import TodoList from "./TodoList";
import { NavBar } from "./NavBar";

export default function App() {
  return (
    <div className="flex items-center flex-col transition-all">
      <NavBar />
      <TodoList />
    </div>
  );
}
