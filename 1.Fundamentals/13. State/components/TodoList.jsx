import { useState } from "react";
function TodoList() {
    const [todos , setTodos] = useState(['write text','go for walk', 'drink tea']);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos,inputValue]);
            setInputValue("");
        }
    }
  
    return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder="Add a new todo"
                value = {inputValue}
                onChange = {(e)=>setInputValue(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
        <ul>
            {todos.map((todo,index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
