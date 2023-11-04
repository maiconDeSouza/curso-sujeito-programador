import { useEffect, useState } from "react";
import styles from "./App.module.css"
import { Addtask } from "./components/AddTask/Addtask";
import { Header } from "./components/Header/Header";
import { ViewTask } from "./components/ViewTask/ViewTask";

export interface iTaskList {
  id: string
  task: string
  done: boolean
}

export function App() {
  const [ taskList, setTasklist ] = useState<iTaskList[]>([])

  useEffect(() => {
    const newListTask = localStorage.getItem("@mcntaskmanager")
    if(newListTask !== null){
      setTasklist(JSON.parse(newListTask))
    }
  },[])


  function onAddTaskList(newTask: iTaskList){
    setTasklist(taskList => [...taskList, newTask])
    localStorage.setItem("@mcntaskmanager", JSON.stringify(taskList))
  }

  function onDone(id: string){
    const newTaskList = taskList.map(task => {
      if(task.id === id){
        task.done = !task.done
        return task
      }
      return task
    })
    setTasklist(newTaskList)
    localStorage.setItem("@mcntaskmanager", JSON.stringify(taskList))
  }

  function onDestroy(id: string){
    const newtaskList = taskList.filter(task => task.id !== id)
    setTasklist(newtaskList)
    localStorage.setItem("@mcntaskmanager", JSON.stringify(newtaskList))
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section>
          <Addtask onAddTaskList={onAddTaskList} />
        </section>
        <section>
          <ViewTask taskList={taskList} onDone={onDone} onDestroy={onDestroy} />
        </section>
      </main>
    </>
  )
}


