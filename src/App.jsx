
import { useEffect, useState } from "react";
import { auth } from "./component/fireBaseConfig";
import Login from "./component/login";
import Chat from "./component/chat";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(u => setUser(u));
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12">
          {user ? <Chat user={user} /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default App;

