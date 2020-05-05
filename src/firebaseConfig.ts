import * as firebase from "firebase";
import { Toast } from "./toast";

const config = {
  apiKey: "AIzaSyBrdzKjle588Ov2KOryABKYAq0zIZVerZY",
  authDomain: "fir-auth-27e49.firebaseapp.com",
  databaseURL: "https://fir-auth-27e49.firebaseio.com",
  projectId: "fir-auth-27e49",
  storageBucket: "fir-auth-27e49.appspot.com",
  messagingSenderId: "46477225929",
  appId: "1:46477225929:web:dff6512c8e2b0c2f068218",
  measurementId: "G-RWL3BWW62V",
};

firebase.initializeApp(config);

export async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}

export async function logoutUser() {
  return firebase.auth().signOut();
}

export async function loginUser(username: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password);
    return res;
  } catch (err) {
    Toast(err.message);
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(username, password);
    console.log(res);
    return true;
  } catch (err) {
    Toast(err.message);
    return false;
  }
}
