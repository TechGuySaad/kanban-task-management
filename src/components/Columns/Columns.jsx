import { useState } from "react";
import ViewTask from "./ViewTask";
import AddTask from "./AddTask";


export default function Columns({viewBoard,addTask,setAddTask}) {

    const [viewCard,setViewCard] = useState(null)
   


    function handleClickOutsideViewTask(){
        setViewCard(null)
    }
    

    function cardNameCatch(event){
        console.log('card catch:',event.target.childNodes[0].data)
        viewBoard.columns.map((column,index)=>{

        column.tasks.map((task,index)=>{
            if(task.title === event.target.childNodes[0].data){
                console.log('the task you clicked on is:',task.title)
                console.log('task:',task)
                setViewCard(task)
            }
        })

        })
        // setView(event.target.childNodes[0].data)

    }


  return (
    <>
    <ViewTask handleClickOutsideViewTask={handleClickOutsideViewTask} cardNameCatch={cardNameCatch} viewCard={viewCard}/>

    {addTask && <AddTask addTask={addTask} setAddTask={setAddTask}/>}
    
    
   
    <div className="columns w-6/7 ml-64   h-full flex gap-x-8 pl-5 pt-5 overflow-y-scroll mb-3 overflow-x-scroll" >
    {viewBoard &&
      viewBoard.columns.map((column, index) => {
        return (
          <div key={index} className="column w-72 h-full flex flex-col gap-y-5">
            <h1 className="text-lg  text-gray-500 font-medium">{column.name + `(${column.tasks.length})`}</h1>
            {column.tasks.map((task, index) => {
              return (
                <div

                  key={index}
                  onClick={cardNameCatch}
                  className="card bg-white w-full h-fit px-3 py-5 rounded-lg shadow-md shadow-gray-200 flex flex-col gap-y-2 cursor-pointer "
                >
                  <h2 className="font-bold text-lg">{task.title}</h2>
                  <p className="text-sm text-gray-400 font-semibold">0 of {task.subtasks.length} subtasks</p>
                </div>
              );
            })}
          </div>
        );
      })}

      
  </div>
  </>
  )
}
