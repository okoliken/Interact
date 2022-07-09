import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWO1A-_Si54IZINY7tK9gtHbjZyRJM2TI",
  authDomain: "interact-61183.firebaseapp.com",
  projectId: "interact-61183",
  storageBucket: "interact-61183.appspot.com",
  messagingSenderId: "748763685441",
  appId: "1:748763685441:web:949d7db9374b1f9d445cc0",
  measurementId: "G-536FQ35017",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
