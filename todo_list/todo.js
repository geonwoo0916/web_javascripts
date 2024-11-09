let todos = [];
let id = 0;
let isAllCompleted=false

const todoInputElem = document.querySelector('.todo-input')
const todoListElem = document.querySelector('.todo-list')
const leftITemElem = document.querySelector(".left-items")
const completeAllBtn = document.querySelector(".complete-all-btn")

const onClickComleteAll=()=>{
    if(todos.length==0) return;


    if (isAllCompleted) incompleteAll()
    else completeAll()
    paintTodos()
    isAllCompleted=!isAllCompleted;
}

const completeAll=()=>{
    completeAllBtn.classList.add("checked")
    todos=todos.map(todo=>({...todo,isCompleted:true}))
}

const incompleteAll=()=>{
    completeAllBtn.classList.remove("checked")
    todos=todos.map(todo=>({...todo,isCompleted:false}))
}

const checkCompleteAll=()=>{
    const completedTodos=todos.filter(todo=>todo.isCompleted)
    if(todos.length===completedTodos.lenght){
        isAllCompleted=true
        completeAllBtn.classList.add("checked")
    }else{
        isAllCompleted=false
        completeAllBtn.classList.remove("checked")
    }
}

const setLeftItems=()=>{
    const lefttodos=todos.filter(todo=>todo.isCompleted===false)
    leftITemElem.innerHTML=`${lefttodos.length} item left`
}

const appendTodos = (text)=>{
    const newId = ++id;
    todos.push({
        id:newId, isCompleted:false, content:text
    })
    checkCompleteAll()
    paintTodos()
}

const deletTodo=(todoId)=>{
    todos = todos.filter(todo=> todo.id!==todoId)
    checkCompleteAll()
    paintTodos()
}

// const completeTodo=(todoId)=>{
//     todos = todos.map(todo=> todo.id==todoId?{...todo,isCompleted:!todo.isCompleted}:todo)
//     checkCompleteAll()
//     paintTodos()
// }

const completeTodo=(todoId)=>{
    todos.forEach((todo) => {
        if (todo.id === todoId) {
            todo.isCompleted = !todo.isCompleted;
        }
    });
    checkCompleteAll()
    paintTodos();
}

const updateTodo=(todoId,content)=>{
    todos.forEach((todo)=>{
        if(todo.id===todoId){
            todo.content=content;
        }
    })
    paintTodos();
}

const onDbclickTodo=(e, todoId)=>{
    const todoElem =e.target
    const todoItemElem=todoElem.parentNode
    const inputElem=document.createElement("input")
    inputElem.classList.add("edit-input")
    inputElem.value=todoElem.innerText

    inputElem.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            updateTodo(todoId,e.target.value);
            document.body.removeEventListener('click',onOutClick);
        }
    })
    
    inputElem.addEventListener("keydown",(e)=>{
        if(e.key==="Escape"){
            todoItemElem.removeChild(inputElem)
            document.body.removeEventListener('click',onOutClick);
        }
    })

    const onOutClick=(e)=>{
        if(e.target!==inputElem){
            todoItemElem.removeChild(inputElem)
            document.body.removeEventListener('click',onOutClick);
        }
    }

    document.body.addEventListener("click",onOutClick);
    todoItemElem.appendChild(inputElem)
    inputElem.focus()
}

const painTodo = (todo)=>{
    const todoItemElem = document.createElement('li')
    todoItemElem.classList.add('todo-item')

    const checkboxElem = document.createElement('div')
    checkboxElem.classList.add('checkbox')
    checkboxElem.addEventListener("click", ()=>completeTodo(todo.id))

    const todoElem = document.createElement('div')
    todoElem.classList.add('todo')
    todoElem.addEventListener("dblclick",(event)=>onDbclickTodo(event,todo.id))
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
    setLeftItems()
}

const init = ()=>{
    todoInputElem.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'&&e.target.value!=''){
            appendTodos(e.target.value)
            todoInputElem.value=''
        }
    })
    completeAllBtn.addEventListener('click', onClickComleteAll)
}

init()