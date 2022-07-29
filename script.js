const add = document.querySelector('#submit').onclick = CreateListItem
const ul = document.querySelector('#ul')
const input = document.querySelector('#txt')  
const arr = []

function CreateListItem(e){
    e.preventDefault()
    arr.push(input.value)
    localStorage.setItem('Item',JSON.stringify(arr))
    localStorage.getItem('Item',JSON.stringify(arr))

    const myPromise = new Promise((resolve,reject)=>{
        if(input.value !== ''){
            resolve('Item Added to the list!')
        }else{
            reject('ERROR,please add an item to the list!')
        }
    }).then((fullfilled)=>{
        console.log('%c' + fullfilled, 'color:#7458B9')
    }).catch((error)=>{
        console.error(error)
    })
    
    
    
    if(input.value !== ''){
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

/*

Estudar como colocar tabelas no console

let devices = [
            {
              name: 'iPhone',
              brand: 'Apple'
            },
          ]
        console.table(devices)

*/

    




  
    
   
    



