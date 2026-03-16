// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Realtime Database
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeRzSaM4x4YsJMHs_H9q29MfjH86f4z_0",
  authDomain: "fir-database-23234.firebaseapp.com",
  databaseURL: "https://fir-database-23234-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-database-23234",
  storageBucket: "fir-database-23234.firebasestorage.app",
  messagingSenderId: "780559804810",
  appId: "1:780559804810:web:5e945c5d0929cf504e8073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);