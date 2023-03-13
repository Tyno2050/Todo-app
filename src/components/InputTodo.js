import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const InputTodo = () => {
    const [todo, setTodo] = useState('');
    const {todoList, setTodoList} = useContext(TodoContext);

    const addTodo = () => {
        setTodoList([...todoList, todo])
        setTodo("")
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    return (
        <div>
            <input type="text" value={todo} onChange={handleChange} />
            <button onClick={addTodo}> Add </button>
        </div>
    );
}

export default InputTodo;