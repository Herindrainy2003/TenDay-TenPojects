let AddBtn = document.querySelector('#AddBtn')
let todoValue = document.querySelector('#todo')
let Alltodo = document.querySelector('#Alltodo')

AddBtn.addEventListener('click' , addTask )

function addTask(){
    let task = todoValue.value
    let editBtn = document.createElement('button')
    let delBtn = document.createElement('button')
    let li = document.createElement('li')
   
    li.textContent = task
    editBtn.textContent =  "Editer"
    delBtn.textContent =  "Terminer"

    todoValue.value = ""

  Alltodo.appendChild(li)
  Alltodo.appendChild(editBtn)
  Alltodo.appendChild(delBtn)


  editBtn.addEventListener('click' , ()=>{
    Alltodo.removeChild(li)
    Alltodo.removeChild(editBtn)
    Alltodo.removeChild(delBtn)
    editTask(task)
})

delBtn.addEventListener('click' ,()=>{
    li.classList.add('endTask')
})

}


const editTask = (task)=>{
    todoValue.value = task
}

