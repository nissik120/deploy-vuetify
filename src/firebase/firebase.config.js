export const firebaseConfig = {
  apiKey: "AIzaSyBjVxkle7n_GXzGEYNOhPz2oDEJiCMdSdk",
  authDomain: "ecommerce-demo-52eca.firebaseapp.com",
  projectId: "ecommerce-demo-52eca",
  storageBucket: "ecommerce-demo-52eca.firebasestorage.app",
  messagingSenderId: "2141589402",
  appId: "1:2141589402:web:4384177c72fac8962c7423",
  measurementId: "G-X0YMYSEL9Q"
};

export const firebaseConfigImpl = {
  apiKey: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.VUE_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGING_ID}`,
  appId: `${process.env.VUE_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.VUE_APP_FIREBASE_MEASUREMENT_ID}`,
};