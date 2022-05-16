import React from 'react';
import { useState } from 'react';

const ToDoForm = ({ addTask, isOpen, closeModal }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <>
            {isOpen && (
                <>
                    <div className='overlay animated'></div>
                    <div className='modal animated'> 
                        <header className='modal-header'>
                            <h2>Entrer une nouvelle tâche :</h2>
                            <button onClick={closeModal} className="close-button">&times;</button>
                        </header>
                        <main className='modal-main'>
                            <form onSubmit={handleSubmit}>
                                <input className="modal-input" value={userInput} type="text" onChange={handleChange} placeholder="Enter task" />
                                {/* <button type='submit'>Submit</button>     */}
                            </form>
                        </main>
                    </div>
                </>
            )}
        </>
    );
};

export default ToDoForm;