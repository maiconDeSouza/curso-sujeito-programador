import { iTaskList } from "../../App"
import { Task } from "../Task/Task"
import styles from "./ViewTask.module.css"

interface ViewProps {
    taskList: iTaskList[]
    onDone: (id:string) => void
    onDestroy: (id:string) => void
}

export function ViewTask({taskList, onDone, onDestroy}:ViewProps){
    return (
        <div className={styles.wrapper}>
            <h2>Task List</h2>
            <div className={styles.task}>
                <h3>Em andamento</h3>
                <ul>
                    {
                        taskList.map(task => {
                            if(!task.done){
                                return (
                                    <li key={task.id}>
                                        <Task 
                                            classTask="in-progress" 
                                            task={task.task} 
                                            id={task.id} 
                                            onDone={onDone}
                                            onDestroy={onDestroy} 
                                        />
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
            <div className={styles.task}>
                <h3>Concluídas</h3>
                <ul>
                    {
                        taskList.map(task => {
                            if(task.done){
                                return (
                                    <li key={task.id}>
                                        <Task 
                                            classTask="completed" 
                                            task={task.task} 
                                            id={task.id} 
                                            onDone={onDone}
                                            onDestroy={onDestroy} 
                                        />
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}