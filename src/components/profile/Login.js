import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    const navigation = useNavigate()

    const login = () => {
        // login to server
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
                    onClick={login}
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
        </div>
    )
}