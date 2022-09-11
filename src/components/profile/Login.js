import { Button, Paper, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../context/user_context/userContext";
import InfoBar from "../userinfo/InfoBar";


export default function Login() {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()
    const { userState, login } = useContext(userContext)
    const [ open, setOpen ] = useState(true)

    const navigation = useNavigate()

    const loginUser = () => {
        // login to server
        fetch(`${process.env.REACT_APP_BACKENDURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            const jwt = res.headers.get('Authorization')
            if (jwt !== null) {
                sessionStorage.setItem('jwt', jwt)
                getCurrentUser(jwt)

            }
        }) 
        .catch(err => console.error(err))
    }

    const getCurrentUser = (jwt) => {
        fetch(`${process.env.REACT_APP_BACKENDURL}/getcurrentuser`, {
            method: 'POST',
            headers: {
                'Authorization': jwt
            }
        })
        .then(res => res.json())
        .then(data => login(data))
        .catch(err => console.error(err))
    }


    const setCloseInfoBar = () => {
        setOpen(false)
    }

    return (
        <div>
            <Paper elevation={3}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 20,
                    borderRadius: 10,
                    padding: 20
                }}
            >
                <TextField label="Käyttäjätunnus" variant="standard"  onChange={event => setUsername(event.target.value)} />
                <TextField label="Salasana" variant="standard" onChange={event => setPassword(event.target.value)} type="password" />
                <Button
                    style={{ width: '60%', marginLeft: 'auto', color: 'red' }}
                >
                    Palauta salasanani...
                </Button>
                <Button
                    variant="contained"
                    onClick={loginUser}
                    style={{ marginTop: 10 }}
                >
                    Kirjaudu
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigation("/register")}
                    style={{ marginTop: 10 }}
                >
                    Rekisteröidy
                </Button>
            </Paper>
            { open && <InfoBar msg="Kirjautuminen onnistui" setCloseInfoBar={setCloseInfoBar} /> }
        </div>
    )
}