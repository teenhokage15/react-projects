import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  

  const handleEdit = (e, id)=>{
   let t= todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS();
  }
  const handleDelete =(e, id)=>{
      let index = todos.findIndex(item=>{
        return item.id === id;
      })
      let newTodos = todos.filter(item=>{
        return item.id!=id;
      })
      setTodos(newTodos);
      saveToLS();
      

  }
  const handleAdd =()=>{
    setTodos([...todos, {id: uuidv4(), todo, iscompleted: false }])
    setTodo("")
    console.log(todos)
    saveToLS();
  }
  const handleChange =(e)=>{
    setTodo(e.target.value)
    
  }
  const handleCheckbox = (e) => {
   let id = e.target.name
   let index = todos.findIndex(item =>{
    return item.id === id;
    saveToLS();
   })
    let newTodos = [...todos];
   newTodos[index].iscompleted= !newTodos[index].iscompleted;
   setTodos(newTodos)
  }

  const toggleFinished =(params)=>{

  }
  

  return (
    <>
      <Navbar/>
      <div className="container w-4/5 mx-auto my-5 min-h-[80vh] p-5 bg-violet-200 rounded-xl" >
       <div className="addTodo my-5">
        <h2 className='text-lg font-bold '>Add a Todo</h2>
        <input type="text" onChange={handleChange} value={todo} className='w-1/2'/>
        <button onClick={handleAdd} className='bg-violet-700 hover:bg-violet-900 p-3 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
       </div>
       <input type="checkbox" checked={setshowFinished} name="" id="" /> Show Finished
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">

            {todos.map(item=>{
            return <div key={item.id} className="todo flex justify-between w-1/4 my-3">
                     <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.iscompleted} id="" />

              <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={(e)=>handleEdit(e , item.id)} className='bg-violet-700 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Edit</button>
                <button onClick={(e)=>handleDelete(e, item.id)} className='bg-violet-700 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Delete</button>
              </div>
            </div>
            })}

          </div>
        
      </div>
    </>
  )
}

export default App
