import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase.js";

const auth = getAuth(app);

export function initAuth(onUserReady) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (onUserReady) onUserReady(user);
    } else {
      signInAnonymously(auth).catch((error) => {
        console.error("Error al autenticar de forma anónima:", error);
      });
    }
  });
}