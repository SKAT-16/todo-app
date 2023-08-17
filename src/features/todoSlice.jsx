import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filteredTasks: [],
  selectedTask: {},
};
var filterText = "";

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
      state.filteredTasks = state.tasks.filter((task) =>
        task.title.includes(filterText)
      );
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.selectedTask = state.tasks.find(
        (task) => task.id === state.selectedTask.id
      )
        ? state.selectedTask
        : {};
      state.filteredTasks = state.tasks.filter((task) =>
        task.title.includes(filterText)
      );
    },
    completeTodo: (state, action) => {
      let task = state.tasks.find((task) => task.id === action.payload);
      task.completed = true;
      if (task.id === state.selectedTask.id) state.selectedTask = task;
      state.filteredTasks = state.tasks.filter((task) =>
        task.title.includes(filterText)
      );
    },
    updateTodo: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === state.selectedTask.id
      );
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        state.filteredTasks = state.tasks.filter((task) =>
          task.title.includes(filterText)
        );
      }
    },
    filterTodo: (state, action) => {
      filterText = action.payload;
      state.filteredTasks = state.tasks.filter((task) =>
        task.title.includes(filterText)
      );
    },
    selectTodo: (state, action) => {
      state.selectedTask = state.tasks.find(
        (task) => task.id === action.payload
      );
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  completeTodo,
  updateTodo,
  filterTodo,
  selectTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
