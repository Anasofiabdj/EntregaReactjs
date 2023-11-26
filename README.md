# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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