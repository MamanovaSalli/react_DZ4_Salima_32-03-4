import {useState} from "react";
import ChatRoom from "./Pages/ChatRoom";

export default function App() {
    const [roomId, setRoomId] = useState("general")
    const [show, setShow] = useState(false)

    return (
        <div style={show ? {height: "calc(100vh - 127px)"} : {height: "100vh"}} className="background">
            <div className="dropdown">
                <label className="dropdownLabel">
                    Choose room: {""}
                    <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                        <option value="general">general</option>
                        <option value="travel">travel</option>
                        <option value="music">music</option>
                    </select>
                </label>
                <button onClick={() => setShow(!show)}>{show ? "Close chat" : "Open Chat"}</button>
            </div>
            {show && <hr/>}
            {show && <ChatRoom roomId={roomId}/>}
        </div>
    )
}
