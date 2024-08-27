import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTask] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, {text: newTask, completed:false}]);
            setNewTask("");
        }
    }
    function editTask(index){
        setEditIndex(index);
        setNewTask(tasks[index].text);
    }
    function saveTask(index){
        const editedTasks = [...tasks];
        editedTasks[index].text = newTask;
        setTask(editedTasks);
        setEditIndex(null);
        setNewTask('');
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }
    function toggleTaskCompletion(index){
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTask(updatedTasks);
    }

    const completedTasks = tasks.sort((a, b) => a.completed - b.completed);

    return(
        <div>
            <div className="taskInput">
                <h2>To Do List</h2>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task" />
                <button className="addBtn" onClick={addTask}>➕</button>
            </div>
            <div className="taskAdded">
                <ul>
                    {completedTasks.map((task, index) =>
                    <li key={index}>
                        <div className="todo">
                            <input type="checkbox"
                            checked = {task.completed}
                            onChange={() => toggleTaskCompletion(index)}/>

                            <label className="todo-label"
                            style={{textDecoration: task.completed ? "line-through" : "none"}}>
                                {task.text}</label>

                            {editIndex === index ? (<button className="saveBtn"
                                onClick={() => saveTask(index)}>💾</button>) :
                                (<button className="editBtn"
                                    onClick={() => editTask(index)}>✏️</button>)}
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