let todos = [];
let id = 0;
let isAllCompleted=false
let currentShowType = 'all'
let keyword = ''

const todoInputElem = document.querySelector('.todo-input')
const todoListElem = document.querySelector('.todo-list')
const leftITemElem = document.querySelector(".left-items")
const completeAllBtn = document.querySelector(".complete-all-btn")
const showAllBtn = document.querySelector(".show-all-btn")
const showActiveBtn = document.querySelector(".show-active-btn")
const showCompletedBtn = document.querySelector(".show-completed-btn")
const clearCompletedBtn = document.querySelector(".clear-completed-btn")
const todoSearchBtn = document.querySelector(".todo-search-input")

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


const clearCompletedTodos = ()=>{
    todos=todos.filter(todo=>!todo.isCompleted)
    paintTodos()
}

const paintTodos = ()=>{
    todoListElem.innerHTML=''

    let filteredTodos=todos;
    if(currentShowType=='active'){
        filteredTodos=todos.filter(todo=>!todo.isCompleted)
    }else if(currentShowType=='completed'){
        filteredTodos=todos.filter(todo=>todo.isCompleted)
    }

    if(keyword != ''){
        filteredTodos =filteredTodos.filter(todo=>todo.content.toLowerCase().includes(keyword.toLowerCase()))
    }

    filteredTodos.forEach((todo)=> painTodo(todo))
    setLeftItems()
}

const onClickShowTodosType = (e)=>{
    const currentElem=e.target
    const type=currentElem.dataset.type;

    if (currentShowType === type) return;

    const preBtn=document.querySelector(`.show-${currentShowType}-btn`)
    preBtn.classList.remove('selected')

    currentElem.classList.add('selected')
    currentShowType=type;
    paintTodos();
}

const init = ()=>{
    todoInputElem.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'&&e.target.value!=''){
            appendTodos(e.target.value)
            todoInputElem.value=''
        }
    })
    todoSearchBtn.addEventListener('input',(e)=>{
        keyword = e.target.value
        paintTodos()

    })
    completeAllBtn.addEventListener('click', onClickComleteAll)
    showActiveBtn.addEventListener('click',onClickShowTodosType)
    showAllBtn.addEventListener('click',onClickShowTodosType)
    showCompletedBtn.addEventListener('click',onClickShowTodosType)
    clearCompletedBtn.addEventListener('click',clearCompletedTodos)
}

init()