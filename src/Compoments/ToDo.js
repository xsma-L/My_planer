import React from 'react';

const ToDo = ({ todo, handleFilter, taskCompleted, taskUncompleted }) => {
    return (
        <div className={ todo.complete ? "todo-element strike" : "todo-element" } key={todo.id}>
            <div className='task'>{ todo.task }</div>
            <div className='todo-actions'>
                <span className='done'>
                    { todo.complete ? <img className="finished-icon" src={"cross.png"} alt="finished" style={{height: "20px"}} onClick={() => taskUncompleted(todo.id)} /> 
                        : <img className="done-icon" src={"done.png"} alt="done" style={{height: "20px"}} onClick={() => taskCompleted(todo.id)} />
                    }
                </span>
                <span className='delete'>
                    <img className="trash-icon" src={"trash.png"} alt="delete" style={{height: "27px"}} onClick={() => handleFilter(todo.id)}/>
                </span>
            </div>
        </div>
    );
};

export default ToDo;