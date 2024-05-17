import { useState } from "react";

interface TodoItem {
    id:number
    todo:string
}


const Todo= () => {

    // Help managing state, useState for input, and useState for list
    // useState to help with our input state
    const [input, setInput] = useState('');

    // useState to help track our list
    const [list, setList] = useState<TodoItem[]>([]);

    // Create functions to help us add, delete, update list

    // Create a function to help us add our todo to our list
    const addToDo = (newItem:string) => {
        const newToDo:TodoItem = {
            id:Math.random(),
            todo:newItem
        }
        setList([...list,newToDo]);
        setInput("");
    }

    

  return (
    <>
    <div className="myContainer">
        <div className="row">
            <h1>Todo List</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  />
            <button className="addButton" onClick={() => addToDo(input)}>Add</button>
            
        </div>

        <ul>
            {list.map(item => (
                <li key={item.id}>
                    {item.todo}
                    <button>X</button>
                </li>
            ) )}
        </ul>
        {/* render our list, ul, li map list update our useState */}

    </div>
    {/* Title, input field, button, somewhere to display our todo list */}
    </>
  )
}

export default Todo