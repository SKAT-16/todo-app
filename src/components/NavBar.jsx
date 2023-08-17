import addIco from "../assets/add-btn.png";
import editICO from "../assets/edit-nav.png";
import newICO from "../assets/add-nav.png";
import penICO from "../assets/pen.png";
import searchIco from "../assets/search-btn.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, filterTodo, updateTodo } from "../features/todoSlice";

export const NavBar = () => {
  return (
    <div className="mt-8 w-full flex items-start justify-between">
      <div className="flex items-start">
        <AddTaskButton />
        <EditTaskButton />
      </div>

      <SearchBar />
    </div>
  );
};

const AddTaskButton = () => {
  return (
    <div
      tabIndex={0}
      className="bg-cyan-400 group shadow-sm rounded-md p-2 mx-5 md:ml-10 cursor-pointer hover:shadow-lg duration-300 ease-in-out">
      <img
        src={newICO}
        alt="logo"
        className="w-8 h-8 group-hover:mb-3 group-hover:mx-auto group-hover:scale-105 duration-200"
      />

      <AddInputSection />
    </div>
  );
};

const AddInputSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (title && description) dispatch(addTodo({ title, description }));
  };

  return (
    <div className="bg-transparent flex-col w-[150px] duration-300 hidden group-hover:flex">
      <input
        type="text"
        name="title"
        id=""
        placeholder="title"
        className="bg-cyan-300 px-2 py-1 m-1 rounded-md outline-none text-gray-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        name="description"
        id=""
        placeholder="description..."
        className="bg-cyan-300 px-2 py-1 m-1 outline-none text-gray-600"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <img
        src={addIco}
        className="self-end w-10 h-10 mt-3 hover:scale-110 active:scale-75 duration-300"
        onClick={handleAddItem}
      />
    </div>
  );
};

const EditTaskButton = () => {
  return (
    <div
      tabIndex={0}
      className="bg-cyan-400 group shadow-sm rounded-md p-2 cursor-pointer hover:shadow-lg duration-300 ease-in-out">
      <img
        src={editICO}
        alt="logo"
        className="w-8 h-8 group-hover:mb-3 group-hover:mx-auto group-hover:scale-105 duration-200"
      />

      <EditInputSection />
    </div>
  );
};

const EditInputSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const handleEditItem = () => {
    if (title && description) dispatch(updateTodo({ title, description }));
  };

  return (
    <div
      className="bg-transparent flex-col w-[150px] duration-300 hidden group-hover:flex">
      <input
        type="text"
        name="title"
        placeholder="title"
        className="bg-cyan-300 px-2 py-1 m-1 rounded-md outline-none text-gray-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        name="description"
        placeholder="description..."
        className="bg-cyan-300 px-2 py-1 m-1 outline-none text-gray-600"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <img
        src={penICO}
        className="self-end w-10 h-10 mt-3 hover:scale-110 active:scale-75 duration-300"
        onClick={(e) => handleEditItem(e)}
      />
    </div>
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);
    dispatch(filterTodo(text));
  };

  return (
    <div className="px-3 py-1 rounded-lg bg-cyan-200 mr-5 md:mr-20 flex items-center active:shadow-lg hover:scale-110 duration-300 ease-in-out">
      <input
        type="text"
        name="s-bar"
        id=""
        placeholder="search"
        className="bg-transparent text-slate-600 w-[75px] outline-none"
        onChange={handleSearch}
        value={query}
      />
      <img
        src={searchIco}
        alt="search-icon"
        className="w-5 h-5 cursor-pointer"
      />
    </div>
  );
};
