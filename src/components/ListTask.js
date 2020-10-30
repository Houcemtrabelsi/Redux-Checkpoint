import React,{useState} from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { taskDone,showAll } from "../Reducer/Action";


const ListTask = (props) => {

 const [tasks, setTasks] = useState(props.toDoListe)
  return (
    <div>
      <button onClick={()=>props.filterDone(tasks) }>Tasks Done</button>
      <button onClick={()=>props.showAll(tasks) }>Tasks Not Done</button>
      {props.toDoListe.map((el) => (
        <Task task={el} />
      ))}
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    toDoListe: state.ToDoReducer,
    
  }
};

const mapDispachToProps = (dispach) => {
  return {
    filterDone: (x) => dispach(taskDone(x)),
    showAll : (x)=> dispach(showAll(x))
  };
};
export default connect(mapStateToProps, mapDispachToProps)(ListTask);
