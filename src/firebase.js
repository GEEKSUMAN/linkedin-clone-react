import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCMiI3RZOvwgPwF7BmI5QfeJIMJrGtRz0Y",
  authDomain: "blogproject-5cc7b.firebaseapp.com",
  projectId: "blogproject-5cc7b",
  storageBucket: "blogproject-5cc7b.appspot.com",
  messagingSenderId: "1061841978731",
  appId: "1:1061841978731:web:0f59ecd60669103da6f82e"
};

  //This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();
  export { db, auth}