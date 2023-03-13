import React, { useContext } from 'react';
import { TodoContext } from "../contexts/TodoContext";

const DisplayTodo = () => {
    const {todoList} = useContext(TodoContext);

    return (
        <div>
            {todoList.map((todo, i) => <div key={i}> {todo} </div>)}
        </div>
    );
}

export default DisplayTodo;