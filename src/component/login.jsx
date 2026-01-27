import { useState } from "react";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { app } from "./fireBaseConfig";

const auth = getAuth(app);

function Login() {
  // Signup States
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Signin States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((res) => alert("User Registered!"))
      .catch((err) => alert(err.message));
  };

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((res) => alert("Login Success!"))
      .catch((err) => alert(err.message));
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
      {/* SIGNUP SECTION */}
      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
        <h2>Sign Up</h2>
        <input 
          placeholder="Email" 
          onChange={(e) => setSignupEmail(e.target.value)} 
          value={signupEmail}
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setSignupPassword(e.target.value)} 
          value={signupPassword}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>

      {/* SIGNIN SECTION */}
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <h2>Sign In</h2>
        <input 
          placeholder="Email" 
          onChange={(e) => setLoginEmail(e.target.value)} 
          value={loginEmail}
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setLoginPassword(e.target.value)} 
          value={loginPassword}
        />
        <button onClick={handleSignin}>Login</button>
      </div>
    </div>
  );
}

export default Login;