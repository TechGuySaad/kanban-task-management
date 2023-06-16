import { useEffect, useState } from "react";
import Body from "./components/body/Body";
import Sidebar from "./components/sidebar/Sidebar";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Columns from "./components/Columns/Columns";

function App() {
  const [boards, setBoards] = useState(null);
  const boardsCollection = collection(db, "boards");

  const [selectedBoard, setSelectedBoard] = useState("");
  const [viewBoard, setView] = useState(null);
  const [addTask,setAddTask] = useState(false)

  async function createTask(){
    await addDoc(boardsCollection,{})
    
  }

  useEffect(() => {
    async function getBoards() {
      const querySnapshot = await getDocs(boardsCollection);
      const documents = querySnapshot.docs;

      if (documents.length > 0) {
        const firstDocument = documents[0];
        setBoards(firstDocument.data().boards);
      } else {
        console.log("No documents found in the 'boards' collection.");
      }
    }

    getBoards();
  }, []);

  console.log("boards:", boards);

  return (
    <div className="app-container bg-indigo-50 w-full h-screen flex ">
      <Sidebar boards={boards} setSelectedBoard={setSelectedBoard} />

      <div className="body flex flex-col w-full h-screen">
        <Body
          selectedBoard={selectedBoard}
          boards={boards}
          setView={setView}
          viewBoard={viewBoard}
          setAddTask={setAddTask}
          addTask={addTask}
        />

        <Columns viewBoard={viewBoard} addTask={addTask} setAddTask={setAddTask}/>

        
      </div>
    </div>
  );
}

export default App;
