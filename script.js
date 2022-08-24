//All the glory for my lord Jesus Christ,who help me on creating my first to-do-list
const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const input = document.querySelector('#txt')
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function CreateListItem(e){
    e.preventDefault()

    const sendPromisse = ()=>{
        //simulation of sending tasks for the database using promises
        const TASK_ADDED = new Promise((resolve,reject)=> input.value != '' ?
        resolve(`Item ${input.value} Added to the list!`)
       : reject('ERROR,please add an item to the list!')    
       ).then(fullfilled => console.log('%c' + fullfilled, 'color:#7458B9')
       ).catch(error=> console.error(error))
    }
    sendPromisse()

    const addItem = () => input.value !== '' ? createStorage() :showAlert()
    addItem()
    ul.innerHTML = ''
    Render()
    
}

const createStorage = ()=>{
    tasks.push(input.value)
    input.value =''
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

const showAlert = ()=> alert('Item is required!')


function Render(){
    
    if(localStorage.tasks == null){
        ul.innerHTML = '<p>No Items</p>'
    }else{
       tasks.forEach((task) => { //forEach used for creation of dynamic tasks
        const div = document.createElement('div')
        div.setAttribute('class','flex')
        ul.appendChild(div)

        const li = document.createElement('li')
        li.textContent = task
        div.appendChild(li)
        input.value = ''
      
        const removeButton = document.createElement('i')
        removeButton.setAttribute('class','fa-regular fa-trash-can')
        div.appendChild(removeButton)
        removeButton.addEventListener('click',() =>{
        //I do not use the "forEach index" because it was picking the wrong id
            ul.removeChild(div) 
            const index = tasks.indexOf(task)
            tasks.splice(index,1)
                localStorage.setItem("tasks",JSON.stringify(tasks))
        })
  });
 }
    
}
Render()


    
   
    



