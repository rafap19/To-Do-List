const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const render = document.querySelector('#render')
const input = document.querySelector('#txt')

const arr = []

function CreateListItem(e){
    e.preventDefault()

    const PROMISE = new Promise((resolve,reject)=>{
        if(input.value != ''){
            resolve('teste')
        }else{
            reject('failed')
        }
    }).then((fulfilled)=>{
        console.log(fulfilled)
    }).catch((error)=>{
        console.error(error)
    })/*
    if(input.value !== ''){
            createStorage()
            input.value =''
            const fullfilled = 
            console.log('%c' + fullfilled, 'color:#7458B9') 
    
    }else{
        const error = 'ERROR,please add an item to the list!'
        console.error(error)
        alert('Item is required!')
    }*/
}

function createStorage(){
    if(input.value !== ''){
        arr.push(input.value)
        localStorage.setItem("Item",JSON.stringify(arr))
    }
}
createStorage()

function Render(){

    if(localStorage.Item == null){
        ul.innerHTML = '<p>No Items</p>'
    }else{
        const div = document.createElement('div')
        div.setAttribute('class','flex')
        ul.appendChild(div)

        const li = document.createElement('li')
        li.textContent = JSON.parse(localStorage.Item)// <--- subtituí pelo localstorage.Item
        div.appendChild(li)
        input.value = ''

        const removeButton = document.createElement('i')
        removeButton.setAttribute('class','fa-regular fa-trash-can')
        div.appendChild(removeButton)
        removeButton.addEventListener('click',RemoveListItem)


    function RemoveListItem(){
        ul.removeChild(div)
        }
    }
    
}
Render()




//ul.textContent = JSON.parse(localStorage.Item)


  /*
  
  const div = document.createElement('div')
        div.setAttribute('class','flex')
        ul.appendChild(div)

    const li = document.createElement('li')
        li.textContent = item// <--- subtituí pelo localstorage.Item
        div.appendChild(li)
        input.value = ''

    const removeButton = document.createElement('i')
        removeButton.setAttribute('class','fa-regular fa-trash-can')
        div.appendChild(removeButton)
        removeButton.addEventListener('click',RemoveListItem)


    function RemoveListItem(){
        ul.removeChild(div)
        }
  */
    
   
    



