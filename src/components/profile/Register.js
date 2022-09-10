import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function Register() {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()
    const [ password2, setPassword2 ] = useState()

    return (
        <>
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
                <TextField label="Salasana uudelleen" variant="standard" onChange={event => setPassword2(event.target.value)} type="password" />
                <Button
                    variant="contained"
                    // onClick={login}
                    style={{ marginTop: 10 }}
                >
                    Rekisteröidy
                </Button>
            </Paper>
        </>
    )
}