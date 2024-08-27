import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTask] = useState(["Eat", "Sleep", "Write"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        
    }
    function editTask(index){

    }
    function deleteTask(index){

    }

    return(
        <div>
            <div className="taskInput">
                <h2>To Do List</h2>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task" />
                <button className="addBtn" onClick={addTask}>➕</button>
            </div>
            <div className="taskAdded">
                <ul>
                    {tasks.map((task, index) =>
                    <li key={index}>
                        <div className="todo">
                            <input type="checkbox" />
                            <label className="todo-label">{task}</label>
                            <button className="editBtn"
                                onClick={() => editTask(index)}>✏️</button>
                            <button className="deleteBtn" 
                                onClick={() => deleteTask(index)}>🗑️</button>
                        </div>
                    </li>)}
                </ul>
            
            </div>
        
        </div>
    )
}
export default ToDoList