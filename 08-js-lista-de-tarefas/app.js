const taskList = ['Acordar Cedo', 'Estudar Javascript']
const app = document.querySelector('#app')

function createList(){
    taskList.forEach(task => {
        const ul = app.querySelector('ul')
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.setAttribute('title', task)
        const taskText = document.createTextNode(task)
        const buttonText = document.createTextNode('excluir')

        li.appendChild(taskText)
        button.appendChild(buttonText)

        li.appendChild(button)
        ul.appendChild(li)
    })
}

app.addEventListener('click', e => {
    e.preventDefault()
    const event = e.target
   
    if(event.value === 'Add'){
        const taskText = app.querySelector('.task').value
        if(!taskText)return alert('Digita uma task ai mano')
        app.querySelector('ul').innerText = ''

        taskList.push(taskText)
        app.querySelector('form').reset()
        createList()
    }

    if(event.innerText === 'excluir'){
        const task = event.title
        const index = taskList.indexOf(task)

        if(index > -1){
            taskList.splice(index, 1)
            app.querySelector('ul').innerText = ''
            createList()
        }
    }
})

createList()