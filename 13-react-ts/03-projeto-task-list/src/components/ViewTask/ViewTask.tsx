import { useMemo } from "react"
import { iTaskList } from "../../App"
import { Task } from "../Task/Task"
import styles from "./ViewTask.module.css"

interface ViewProps {
    taskList: iTaskList[]
    onDone: (id:string) => void
    onDestroy: (id:string) => void
}

export function ViewTask({taskList, onDone, onDestroy}:ViewProps){
    const totalInProgress = useMemo(() => {
        const totalInProgress = taskList.filter(task => !task.done)
        return totalInProgress.length
    }, [taskList])

    const totalCompleted = useMemo(() => {
        const totalCompleted = taskList.filter(task => task.done)
        return totalCompleted.length
    },[taskList])
    return (
        <div className={styles.wrapper}>
            <h2>Task List</h2>
            <div className={styles.task}>
                <h3>Em andamento - {totalInProgress}</h3>
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
                <h3>Concluídas - {totalCompleted}</h3>
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