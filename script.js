const create = document.querySelector('#submit').onclick = createP
const response = document.querySelector('#response')
const input = document.querySelector('#txt')



function createP(e){

    e.preventDefault()
    
    response.setAttribute('class','col')

    const div = document.createElement("div")
        div.setAttribute('class','flex')
        response.appendChild(div)

    const p = document.createElement("p")
    p.textContent= input.value
   div.appendChild(p)
    input.value = ''
    

    const removeBt = document.createElement("button")
    removeBt.textContent= 'Remove'
    div.appendChild(removeBt)
    removeBt.addEventListener('click',removeP)


    function removeP(){
        div.removeChild(removeBt)
        div.removeChild(p)
    }

}



