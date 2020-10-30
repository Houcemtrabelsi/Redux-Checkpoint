



export const addTask = newTask =>{
    return{
    type:'ADD_TASK',
    payload:newTask
    }
};


export const taskDone = isDone => {
    return{
        type:'TASK_DONE',
        payload:isDone
    }
};

export const showAll = isDOne =>{
    return {
        type:'SHOW_ALL',
        payload:isDOne

    }
}