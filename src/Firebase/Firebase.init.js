import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBj7xhE3t5roX2Mx2quqqCBLB8Di-eAt-g",
  authDomain: "scic-task.firebaseapp.com",
  projectId: "scic-task",
  storageBucket: "scic-task.appspot.com",
  messagingSenderId: "738266976657",
  appId: "1:738266976657:web:55f3fb3bb0195ab802ca30"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;