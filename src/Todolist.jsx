import React,{useState} from "react"

function Todolist(){
    
    const [tasks, setTasks]= useState([""]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
            setNewTask(event.target.value);
    }


    function addTask(){
        if(newTask.trim() != ""){
        setTasks(tasks =>[...tasks,newTask]);
        setNewTask('');
        }
    }


    function deleteTask(index){

        const updatedTasks=tasks.filter((_,i) => i!==index);
        setTasks(updatedTasks);
    }


    function moveTaskup(index){

        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }


    function moveTaskdown(index){

        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }


    
    return (<div className="to-do-list">

        <h2>MY TODO LIST</h2>
        <div>
        <input type="text" placeholder="Enter a task ..."
                    value={newTask}
                    onChange={handleInputChange} className="input" />
        <button
        className="add-button" onClick={addTask}>
            ADD A TASK</button>            

        </div>

        <ol>
            {tasks.map((task ,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=> deleteTask(index)}>DELETE</button>
                <button className="moveup"onClick={()=>moveTaskup(index)}>👆</button>
                <button className="movedown"onClick={()=>moveTaskdown(index)}>👇</button>
            </li>
            )}
        </ol>

    </div>);
}
export default Todolist