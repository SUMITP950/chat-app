
import {useContext, useEffect, useState } from "react";
import { auth } from "./component/fireBaseConfig";
import Login from "./component/login";
import Chat from "./component/chat";
import { AuthContext } from "./AuthContext";


function App() {
  const { user } = useContext(AuthContext);


  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
       
          {user ? <Chat /> : <Login />}
    
      </div>
    </div>
  );
}

export default App;
