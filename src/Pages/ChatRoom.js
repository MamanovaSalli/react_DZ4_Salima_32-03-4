import {useEffect, useState} from "react";
import General from "./general";
import Travel from "./travel";
import Music from "./music";
import {createConnection} from "../chat";

function ChatRoom({roomId}) {
    const [serverUrl, setServerUrl] = useState('http:locale.server:123..')

    const showData = () => {
        switch (roomId) {
            case "general":
                return <General/>
            case "travel":
                return <Travel/>
            case "music":
                return <Music/>
            default:
                return
        }
    }

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect()
        return () => {
            connection.disconnect()
        }
    }, [roomId, serverUrl]);

    return (
        <>
            <div className="urlWelcome">
                <label>
                    Server Url:{''}
                    <input value={serverUrl} onChange={(e) => setServerUrl(e.target.value)}/>
                </label>
                <h1> Welcome to the {roomId} room</h1>
            </div>
            {showData()}
        </>
    )
}

export default ChatRoom