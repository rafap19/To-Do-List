const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const input = document.querySelector('#txt')  
const arr = []
function CreateListItem(e){
    e.preventDefault()
    
    if(input.value !== ''){
        arr.push(input.value)
        console.log(input.value)
        localStorage.setItem("Item",JSON.stringify(arr))
    
        
        const fullfilled = 'Item Added to the list!'
        console.log('%c' + fullfilled, 'color:#7458B9')

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
        const error = 'ERROR,please add an item to the list!'
        console.error(error)
        alert('Item is required!')
    }


}


    




  
    
   
    



