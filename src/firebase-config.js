import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8SJkmoNieg5f2_1DJHMRQ4T4bk8-XGH0",
  authDomain: "kanban-task-management-70e57.firebaseapp.com",
  projectId: "kanban-task-management-70e57",
  storageBucket: "kanban-task-management-70e57.appspot.com",
  messagingSenderId: "1027138156112",
  appId: "1:1027138156112:web:869f78fc12ff635a1a0355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);





 