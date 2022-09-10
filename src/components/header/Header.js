import { useContext, useEffect, useState } from "react";
import userContext from "../../context/user_context/userContext";
import Appbar from "./Appbar";


export default function Header() {

    const [ msg, setMsg ] = useState()

    const { userState } = useContext(userContext)

    useEffect(() => {
        userState.user === null ? setMsg("Kirjautumalla pääset luomaan turnauksia") : setMsg("Tervetuloa takaisin user")
    }, [])

    return (
        <>            
            <Appbar /> 
            <p style={{ fontSize: 'small', marginTop: 0, fontWeight: 'bold' }}>{msg}</p>           
        </>
    )
}