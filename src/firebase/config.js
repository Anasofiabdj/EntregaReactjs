
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFjTp2Y-GQB6fvjV1wPslr0nO4zDQAuro",
  authDomain: "proyectoreact-b53d0.firebaseapp.com",
  projectId: "proyectoreact-b53d0",
  storageBucket: "proyectoreact-b53d0.appspot.com",
  messagingSenderId: "1028200798604",
  appId: "1:1028200798604:web:9be8096d3c60220fc95ea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase= ()=> app