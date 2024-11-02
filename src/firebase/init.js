import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjVxkle7n_GXzGEYNOhPz2oDEJiCMdSdk",
  authDomain: "ecommerce-demo-52eca.firebaseapp.com",
  projectId: "ecommerce-demo-52eca",
  storageBucket: "ecommerce-demo-52eca.firebasestorage.app",
  messagingSenderId: "2141589402",
  appId: "1:2141589402:web:4384177c72fac8962c7423",
  measurementId: "G-X0YMYSEL9Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, storage, analytics }