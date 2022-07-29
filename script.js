const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const input = document.querySelector('#txt')

const tasks = []
    

function CreateListItem(e){
    e.preventDefault()

    if(input.value !==''){
        const div = document.createElement('div')
        div.setAttribute('class','flex')
        ul.appendChild(div)

        const li = document.createElement('li')
            li.textContent = input.value
            div.appendChild(li)
            input.value = ''
            
            

        const removeButton = document.createElement('i')
            removeButton.setAttribute('class','fa-regular fa-trash-can')
            div.appendChild(removeButton)
            removeButton.addEventListener('click',RemoveListItem)

        function RemoveListItem(){
            ul.removeChild(div)
            }
    }else{
        alert('Item is required!')
    }
}

    




  
    
   
    



