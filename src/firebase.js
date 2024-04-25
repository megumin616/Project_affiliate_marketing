// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwBXkJvRfQI3hRHxjKmSQsKotNkNZxN8I",
  authDomain: "test-project-affiliate.firebaseapp.com",
  projectId: "test-project-affiliate",
  storageBucket: "test-project-affiliate.appspot.com",
  messagingSenderId: "111642357500",
  appId: "1:111642357500:web:5d71d59807a6b3bdbbb179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)