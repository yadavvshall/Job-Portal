// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACn1UhcNjcDWAXbDIhOVcn6sjF8V8NVDY",
  authDomain: "online-job-portal-eb676.firebaseapp.com",
  projectId: "online-job-portal-eb676",
  storageBucket: "online-job-portal-eb676.appspot.com",
  messagingSenderId: "921369544596",
  appId: "1:921369544596:web:2948af498bd62abb303181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
