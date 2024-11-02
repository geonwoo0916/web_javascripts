let todos = [];
let id = 0;

const todoInputElem = document.querySelector('.todo-input')
const todoListElem = document.querySelector('.todo-list')

const appendTodos = (text)=>{
    const newId = ++id;
    todos.push({
        id:newId, isCompleted:false, content:text
    })
    paintTodos()
}

const deletTodo=(todoId)=>{
    todos = todos.filter(todo=> todo.id!==todoId)
    paintTodos()
}

const completeTodo=(todoId)=>{
    todos = todos.map(todo=> todo.id==todoId?{...todo,isCompleted:!todo.isCompleted}:todo)
    paintTodos()
}

const painTodo = (todo)=>{
    const todoItemElem = document.createElement('li')
    todoItemElem.classList.add('todo-item')

    const checkboxElem = document.createElement('div')
    checkboxElem.classList.add('checkbox')
    checkboxElem.addEventListener("click", ()=>completeTodo(todo.id))

    const todoElem = document.createElement('div')
    todoElem.classList.add('todo')
    todoElem.innerHTML=todo.content

    const delBtnElem = document.createElement('button')
    delBtnElem.classList.add('delBtn')
    delBtnElem.innerHTML="x"
    delBtnElem.addEventListener("click",()=>deletTodo(todo.id))

    if (todo.isCompleted){
        todoItemElem.classList.add("checked")
        checkboxElem.innerHTML="✔"
    }

    todoItemElem.appendChild(checkboxElem)
    todoItemElem.appendChild(todoElem)
    todoItemElem.appendChild(delBtnElem)

    todoListElem.appendChild(todoItemElem)
}

const paintTodos = ()=>{
    todoListElem.innerHTML=''
    todos.forEach((todo)=> painTodo(todo))
}

const init = ()=>{
    todoInputElem.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){
            appendTodos(e.target.value)
            todoInputElem.value=''
        }
    })
}

init()