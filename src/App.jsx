import { useEffect, useState } from "react";
import Body from "./components/body/Body";
import Sidebar from "./components/sidebar/Sidebar";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [boards, setBoards] = useState(null);
  const boardsCollection = collection(db, "boards");

  useEffect(() => {
    async function getBoards() {
      const querySnapshot = await getDocs(boardsCollection);
      const documents = querySnapshot.docs;

      if (documents.length > 0) {
        const firstDocument = documents[0];
        setBoards(firstDocument.data().boards)
       
      } else {
        console.log("No documents found in the 'boards' collection.");
      }
    }

    getBoards();
  }, []);

  console.log('boards:',boards);

  return (
    <div className="app-container bg-indigo-50 w-full h-screen flex">
      <Sidebar boards={boards} />

      <div className="body flex flex-col w-full h-screen">
        <Body />
      </div>
    </div>
  );
}

export default App;
