import { useEffect, useState } from "react";
import Body from "./components/body/Body";
import Sidebar from "./components/sidebar/Sidebar";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [boards, setBoards] = useState(null);
  const boardsCollection = collection(db, "boards");

  const [selectedBoard, setSelectedBoard] = useState("");
  const [viewBoard, setView] = useState(null);

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
        />

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
                        className="card bg-white w-full h-fit px-3 py-5 rounded-lg shadow-md shadow-gray-200 flex flex-col gap-y-2"
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
      </div>
    </div>
  );
}

export default App;
