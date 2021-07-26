import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./firebaseConfig.json";

let app: firebase.app.App;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
