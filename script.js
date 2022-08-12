const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const render = document.querySelector('#render')
const input = document.querySelector('#txt')

const arr = []

function CreateListItem(e){
    e.preventDefault()

    const PROMISE = new Promise((resolve,reject)=> input.value != '' ?
     resolve(`Item ${input.value} Added to the list!`)
    : reject('ERROR,please add an item to the list!')    
    ).then(fullfilled => console.log('%c' + fullfilled, 'color:#7458B9')
    ).catch(error=> console.error(error))

    if(input.value !== ''){
            createStorage()
            input.value =''
    }else{
        showAlert()
    }
}


function createStorage(){
    if(input.value !== ''){
        arr.push(input.value)
        localStorage.setItem("Item",JSON.stringify(arr))
    }
}


function showAlert(){
    alert('Item is required!')
}

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
    
   
    



