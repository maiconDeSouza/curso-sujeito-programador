import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { db } from "./firebase"
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import styles from "./App.module.css"
export function App() {
  const [ title, setTitle ] = useState("")
  const [ author, setAuthor ] = useState("")
  const [ posts, setPosts ] = useState([])
  const [ typeButton, setTypeButton ] = useState("cadastrar")
  const [ editID, setEditID ] = useState("")

  function edit(title, author, id){
    setTitle(title)
    setAuthor(author)
    setEditID(id)
    setTypeButton("editar")
  }

 async function updatePost(){
  await updateDoc(doc(db, "posts", editID), {
    title,
    author
  })
  setTitle("")
  setAuthor("")
  setTypeButton("cadastrar")
  }

  async function deletePost(id){
    await deleteDoc(doc(db, "posts", id))
  }

  useEffect(() => {
    const postsRef = collection(db, "posts")
    async function loadingPosts(){
      try {
        onSnapshot(postsRef, (snapShot) => {
          const newList = []
          snapShot.forEach(doc => {
            const newPost = {
              id: doc.id,
              title: doc.data().title,
              author: doc.data().author
        }
          newList.push(newPost)
      })
      setPosts(newList)
        })
      } catch (error) {
        console.log(error)
      }
    }
    loadingPosts()
  },[])
  async function handleAdd(){
    try {
      const id = uuidv4()
      await setDoc(doc(db, "posts", id), {
        title,
        author
      })
      alert("Salvo!")
      setTitle("")
      setAuthor("")
    } catch (error) {
      alert("erro")
      setTitle("")
      setAuthor("")
    }
  }
  return (
    <>
      <div className={styles.container}>
        <h1>Firebase + ReactJS</h1>
        <div className={styles.form}>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="author">Autor</label>
          <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          {
            typeButton === "cadastrar" && <button onClick={handleAdd}>Cadastrar</button>
          }
          {
            typeButton === "editar" && <button onClick={updatePost}>Editar</button>
          }
        </div>
        <div>
          <ul>
            {
              posts.map(post => {
                return (
                  <li key={post.id}>
                    <h2>{post.title}</h2>
                    <span>{post.author}</span>
                    <button onClick={() => edit(post.title, post.author, post.id)}>editar</button>
                    <button onClick={() => deletePost(post.id)}>excluir</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}


