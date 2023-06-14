import Logo from "./assets/logo-dark.svg";
import BoardIcon from './assets/icon-board.svg'

function App() {
  return (
    <div className="app-container bg-indigo-50 w-full h-screen flex">
      <div className="sidebar h-full w-64 bg-white flex flex-col py-8 pr-6 justify-between ">
        <div className="upper-sidebar flex flex-col w-full h-2/3  gap-y-16">
          <div className="logo w-full flex  items-center justify-center">
            <img src={Logo} alt="logo" />
          </div>
          <div className="boards flex flex-col gap-y-2">
            <h3 className="w-full flex justify-start items-center pl-9 text-gray-500 text-sm font-semibold opacity-80 mb-3">ALL BOARDS(3)</h3>

            
            <div className="board w-full h-12 bg-indigo-700 opacity-75 text-white flex pl-9 items-center rounded-r-3xl gap-x-4 cursor-pointer">
              <img src={BoardIcon} alt="board icon" />
              <h2 className="font-bold text-sm">Platform Launch</h2>
            </div>

            <div className="board w-full h-12  opacity-75 text-gray-500 flex  items-center  gap-x-4 pl-9 cursor-pointer hover:bg-indigo-700 hover:text-white hover:rounded-r-3xl">
              <img src={BoardIcon} alt="board icon" />
              <h2 className="font-bold text-sm">Marketing Plan</h2>
            </div>

            <div className="board w-full h-12  opacity-75 text-gray-500 flex pl-9 items-center  gap-x-4 cursor-pointer hover:bg-indigo-700 hover:text-white hover:rounded-r-3xl">
              <img src={BoardIcon} alt="board icon" />
              <h2 className="font-bold text-sm">Roadmap</h2>
            </div>
            
            <div className="create-new-board w-full h-12  opacity-75  flex pl-9 items-center  gap-x-4 text-indigo-700 cursor-pointer hover:bg-indigo-700 hover:text-white hover:rounded-r-3xl  ">
            <img src={BoardIcon} alt="board icon" />
              <h2 className="font-bold text-sm ">+ Create New Board</h2>

            </div>

          </div>
          

        </div>

        <div className="lower-sidebar">

          <h1>Lower sidebar</h1>

        </div>
      </div>
    </div>
  );
}

export default App;
