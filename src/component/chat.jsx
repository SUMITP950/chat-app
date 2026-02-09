import { useContext ,useEffect, useState } from "react";
import { db, auth } from "./fireBaseConfig"
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../AuthContext";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time"));

    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(doc => doc.data()));
    });

    return () => unsub();
  }, []);


  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: msg,
      uid: user.uid,
      email: user.email,
      time: new Date()
    });
    setMsg("");
  };

  return (
    <div className="chat-screen">
      <h3>Chat App</h3>
      <div className="border p-3 mb-2" style={{ height: "300px", overflowY: "scroll" }}>
        {messages.map((m, i) => (
          <div key={i} className={m.uid === user.uid ? "text-start" : "text-end"}>
           <span>
            <b>{m.email}</b>: {m.text}
            </span> 
          </div>
        ))}
      </div>
      <input className="form-control" value={msg} onChange={e => setMsg(e.target.value)} />
      <button className="btn btn-success mt-2" onClick={sendMessage}>Send</button>
      <button className="btn btn-danger mt-2 ms-2" onClick={() => auth.signOut()}>Logout</button>
    </div>

  );
}
