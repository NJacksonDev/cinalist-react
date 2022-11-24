import { initializeApp } from "firebase/app"; //firebase library
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "antd";

const firebaseConfig = {
  apiKey: "AIzaSyBzt7t8P2NLYcOBvAMC7tlJNGGoL9LwQtM",
  authDomain: "final-project-react-nj.firebaseapp.com",
  projectId: "final-project-react-nj",
  storageBucket: "final-project-react-nj.appspot.com",
  messagingSenderId: "1045929267728",
  appId: "1:1045929267728:web:5d41efe5ea69541ab7b095",
};

export default function Login({ setUser }) {
  const handleGoogleLogin = async () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider).catch(alert);
    setUser(response.user);
  };
  return (
    <>
      <Button
        onClick={handleGoogleLogin}
        type="primary"
        className="login-button"
      >
        Sign in with Google
      </Button>
    </>
  );
}
