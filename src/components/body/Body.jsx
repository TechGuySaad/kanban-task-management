
import ThreeDot from '../../assets/icon-vertical-ellipsis.svg'
export default function Body({selectedBoard,boards,viewBoard,setView,setAddTask,addTask}) {

  boards && boards.map((board,index)=>{

    if(board.name === selectedBoard){
      setView(board);
    }

  })

  function handleAddTask(){

    setAddTask(!addTask)

  }

  console.log('view:',viewBoard)


  return (
    <div className="board-name bg-white w-6/7 h-24 border-b-2 border-b-indigo-100 flex items-center px-8 justify-between ml-64">
          <h1 className="text-2xl font-semibold">{selectedBoard}</h1>
          <div className="buttons flex items-center gap-x-8">
            <button className="bg-indigo-600 opacity-90 hover:opacity-75 w-36 h-12 rounded-3xl text-white font-semibold" onClick={handleAddTask}>
              + Add New Task
            </button>
            <img className="three-dot cursor-pointer" src={ThreeDot} alt="three dot menu" />

          </div>

        </div>
  )
}
