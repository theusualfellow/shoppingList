const ul = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')

function buttonClick(){
    let inputValue = input.value;
    
    input.value=''
    const li= document.createElement('li')
    const span = document.createElement('span')
    const button= document.createElement('button')
    
    li.appendChild(span)
    li.appendChild(button)

    span.textContent= inputValue
    button.textContent='delete'

    ul.appendChild(li)
    button.addEventListener('click', ()=>{
        li.remove()
    })
    input.focus()
}


button.addEventListener('click', buttonClick)
