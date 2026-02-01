import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { app } from "./fireBaseConfig";
import ErrorToast from "./ErrorToast";

const auth = getAuth(app);

function Login() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showError = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = () => {
    if (!isValidEmail(signupEmail)) {
      return showError("Enter a valid email");
    }
    if (!signupEmail || !signupPassword) {
      return showError("All fields are required");
    }
    
    if (signupPassword.length < 6) {
      return showError("Password must be at least 6 characters");
    }

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => showError("User Registered!"))
      .catch((err) => showError(err.message));
  };

  const handleSignin = () => {
    if (!loginEmail || !loginPassword) {
      return showError("All fields are required");
    }
    if (!isValidEmail(loginEmail)) {
      return showError("Enter a valid email");
    }

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => showError("Login Success!"))
      .catch((err) => showError(err.message));
  };

  return (
    <div className="loginPage d-flex">
      {/* SIGNUP */}
      <div className="SignUp">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>

      {/* SIGNIN */}
      <div className="signIn">
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={handleSignin}>
            Login
          </button>
        </div>
      </div>

      {/* TOAST */}
      <ErrorToast
        show={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default Login;
