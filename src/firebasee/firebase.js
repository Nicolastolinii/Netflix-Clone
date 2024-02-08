import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-clon-f6045.firebaseapp.com",
  projectId: "netflix-clon-f6045",
  storageBucket: "netflix-clon-f6045.appspot.com",
  messagingSenderId: "89802459831",
  appId: "1:89802459831:web:df1bb36c38b8627b861b32"
};

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
