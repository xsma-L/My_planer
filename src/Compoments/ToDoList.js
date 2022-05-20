import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter, taskCompleted, taskUncompleted }) => {
    return (
        <div className='test1'>
            { toDoList.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} taskCompleted={taskCompleted} taskUncompleted={taskUncompleted}/>
                )
            })}
        </div>
    );
};

export default ToDoList;