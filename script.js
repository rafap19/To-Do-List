const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const input = document.querySelector('#txt')
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function CreateListItem(e){
    e.preventDefault()

    function sendPromisse(){
        const TASK_ADDED = new Promise((resolve,reject)=> input.value != '' ?
        resolve(`Item ${input.value} Added to the list!`)
       : reject('ERROR,please add an item to the list!')    
       ).then(fullfilled => console.log('%c' + fullfilled, 'color:#7458B9')
       ).catch(error=> console.error(error))
    }
    sendPromisse()

    function addItem() {
        input.value !== '' ? createStorage() :showAlert()
    }
    addItem()
    ul.innerHTML = ''
    Render()
    
}


function createStorage(){
    tasks.push(input.value)
    input.value =''
    localStorage.setItem("tasks",JSON.stringify(tasks))
}



function showAlert(){
    alert('Item is required!')
}

document.getElementsByTagName('body').onload = Render
function Render(){
    
    if(localStorage.tasks == null){
        ul.innerHTML = '<p>No Items</p>'
    }else{
       tasks.map(task => {
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
        removeButton.addEventListener('click',RemoveListItem)

    function RemoveListItem(){
        ul.removeChild(div)
        localStorage.removeItem('tasks')
        
        }
       });
    }
    
}
Render()

    
   
    



