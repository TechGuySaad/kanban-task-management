import { useState } from "react";


export default function Columns({viewBoard}) {

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
    {viewCard && (
         <div className="view-task-container absolute w-full h-screen bg-black/70  z-50 flex justify-center items-center " onClick={handleClickOutsideViewTask}>

         <div className="view-task w-96 h-96 bg-white rounded-md">

                <h1>{viewCard.title}</h1>
                <p>{viewCard.description}</p>
                <p>Subtasks(0 out of {viewCard.subtasks.length})</p>
                {viewCard.subtasks.map((subtask,index)=>{
                    return(

                        <p key={index}>{subtask.title}</p>
                    )


                })}

                <p>{viewCard.status}</p>


         
             
         
         </div>
         
         
         </div>

    )
        

    }
    
   
    <div className="columns w-full   h-full flex gap-x-8 pl-5 pt-5 overflow-y-scroll mb-3 " >
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
