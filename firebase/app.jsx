// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfBRHyka4iLtJN2Di3LN8WuM14RaX5rXA",
  authDomain: "kanban-task-management-ebf20.firebaseapp.com",
  projectId: "kanban-task-management-ebf20",
  storageBucket: "kanban-task-management-ebf20.appspot.com",
  messagingSenderId: "1010362529023",
  appId: "1:1010362529023:web:726049b731a4b93270c8ca",
  measurementId: "G-Z98Y473JR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);