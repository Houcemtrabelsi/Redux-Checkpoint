import { v4 as uuidv4 } from "uuid";

var initialState = [
  {
    description: "Redux",
    id: uuidv4(),
    isDone: false,
  },
  {
    description: "react",
    id: uuidv4(),
    isDone: true,
  },
];

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat(action.payload);
    case "TASK_DONE":
      return state.filter((el) => el.isDone === true); 
      case "SHOW_ALL":
        return state.filter((el) => el.isDone === false);
    default:
      return state;
  }
};

export default ToDoReducer;
 