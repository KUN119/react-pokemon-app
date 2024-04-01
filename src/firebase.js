// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6fLreI7xv9OVU5DV_6RifvoA23UHQjA",
  authDomain: "react-pokemon-app-e882e.firebaseapp.com",
  projectId: "react-pokemon-app-e882e",
  storageBucket: "react-pokemon-app-e882e.appspot.com",
  messagingSenderId: "391757920267",
  appId: "1:391757920267:web:27f51fdec2aa12a8602f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;