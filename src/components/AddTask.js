import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Reducer/Action";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ addNewTask }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add New Task ..."
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={() => text ?
          addNewTask(
            {
              description: text,
              id: uuidv4(),
              isDone: false,
            },
            setText("")
          ):null
        }
      >
        ADD
      </button>
    </div>
  );
};

const mapDispachToProps = (dispach) => {
  return {
    addNewTask: (newTask) => dispach(addTask(newTask)),
  };
};



export default connect(null, mapDispachToProps)(AddTask);
