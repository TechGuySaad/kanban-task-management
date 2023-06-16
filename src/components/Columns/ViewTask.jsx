import React from 'react'

export default function ViewTask({handleClickOutsideViewTask,cardNameCatch,viewCard}) {
  return (
    <>
    {viewCard && (
         <div className="view-task-container absolute w-full h-screen bg-black/30  z-50 flex justify-center items-center " onClick={handleClickOutsideViewTask}>

         <div className="view-task w-96 h-fit bg-white rounded-md p-7 flex flex-col gap-y-6">

                <h1 className="text-xl font-bold">{viewCard.title}</h1>
                
                {viewCard.description && <p className="text-sm font-medium text-gray-500">{viewCard.description}</p>}
                <div className="subtasks flex flex-col gap-y-2">
                <p className="text-sm font-bold text-gray-500">Subtasks(0 out of {viewCard.subtasks.length})</p>
                {viewCard.subtasks.map((subtask,index)=>{
                    return(
                        <div key={index} className="flex bg-indigo-50 text-sm font-bold h-fit w-full py-2  rounded-md px-2 cursor-pointer gap-x-4">
                        <input  type="checkbox" name="" id="" />
                        <p  className="">{subtask.title}</p>
                        </div>
                        
                    )


                })}

                </div>
               
                <div className="status flex flex-col gap-y-2">
                    <p className="text-sm font-bold text-gray-500">Current Status:</p>
                <p className="font-bold">{viewCard.status}</p>


                </div>
               


         
             
         
         </div>
         
         
         </div>

    )
        

    }
      
    </>
  )
}
