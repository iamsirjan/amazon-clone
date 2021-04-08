import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNilt8QElEaN9NS4eiXp4bZA6zUcNIo0o",
  authDomain: "fir-9d86d.firebaseapp.com",
  databaseURL: "https://fir-9d86d.firebaseio.com",
  projectId: "fir-9d86d",
  storageBucket: "fir-9d86d.appspot.com",
  messagingSenderId: "511546012871",
  appId: "1:511546012871:web:7682b8051a03a36d943ae2",
  measurementId: "G-E0D68H145C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
