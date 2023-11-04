import { useState } from "react";
import { iTaskList } from "../../App";
import styles from "./Addtask.module.css"
import { PlusCircle } from "lucide-react";
import { v4 as uuidv4 } from 'uuid'

interface AddtaskPropos {
    onAddTaskList: (newTask: iTaskList) => void
}

export function Addtask({onAddTaskList}:AddtaskPropos){
    const [ task, setTask ] = useState("")
    function handleAddTaskList(){
        const newtask = {
            id: uuidv4(),
            task,
            done: false
        }
        onAddTaskList(newtask)
        setTask("")
    }
    return (
        <div className={styles.wrapper}>
            <input type="text" placeholder="Adicione uma Nova Task" value={task} onChange={e => setTask(e.target.value)} />
            <button type="button" title="Adicionar nova task" onClick={handleAddTaskList}>
                <PlusCircle />
            </button>
        </div>
    )
}