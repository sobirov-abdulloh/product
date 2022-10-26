import { ADD_TASK, DELET_TASK,REMUVE_TASK } from "./type";

const initialState = {
  tasks: [],
  trash: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return (state = {
        ...state,
        tasks: [...state.tasks, action.payload],
      });
    case DELET_TASK: {
      const filtredTasks = state.tasks.filter(
        (item) => item.id !== action.payload
      );
      const deletTasks=state.tasks.find(
        (item) => item.id === action.payload
      )
      return (state = {
        tasks: filtredTasks,
        trash:[...state.trash,deletTasks]
      });
    }
    case REMUVE_TASK: {
      const filtred = state.trash.filter(
        (item) => item.id !== action.payload
      );
      const remuveTasks=state.trash.find(
        (item) => item.id === action.payload
      )
      return (state = {
        trash: filtred,
        tasks:[...state.tasks,remuveTasks]
      });
    }
    default:
      return state;
  }
};
export { initialState, reducer };
