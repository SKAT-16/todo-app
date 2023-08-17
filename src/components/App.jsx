import TodoList from "./TodoList";
import { NavBar } from "./NavBar";
import { useState } from "react";

export default function App() {
  return (
    <div className="flex items-center flex-col transition-all">
      <NavBar />
      <TodoList />
    </div>
  );
}
