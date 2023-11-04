import {  Trash2Icon } from "lucide-react"
import styles from "./Task.module.css"

interface TaskProps {
    classTask: string,
    task: string,
    id: string,
    onDone: (id: string) => void,
    onDestroy: (id: string) => void
}

export function Task({classTask, task, id, onDone, onDestroy}:TaskProps){
    function handleDone(){
        onDone(id)
    }
    function handleDestroy(){
        onDestroy(id)
    }
    return (
        <div className={`${styles.wrapper} ${styles[classTask]}`}>
            <span onClick={handleDone}>{task}</span>
            <Trash2Icon onClick={handleDestroy} />
        </div>
    )
}