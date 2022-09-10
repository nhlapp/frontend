import { Button } from '@mui/material';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { useContext, useEffect, useState } from 'react';
import userContext from '../../context/user_context/userContext';

export default function AllTournaments() {

    const [tournaments, setTournaments] = useState([])
    const { userState } = useContext(userContext) 

    useEffect(() => {
        getTournaments()
    }, [])

    const getTournaments = () => {
        fetch(`${process.env.REACT_APP_BACKENDURL}/api/tournaments`)
        .then(res => res.json())
        .then(data => setTournaments(data._embedded.tournaments))
        .catch(err => console.error(err))
    }

    return (
        <>
            <table
                style={{ width: '90%', margin: 'auto' }}
            >
                <thead
                    style={{ backgroundColor: 'lightgrey', fontWeight: 'bold' }}
                >
                    <tr>
                        <td>Nimi</td>
                        <td>Perustaja</td>
                        <td>Alkanut</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            tournaments.map((tournament, index) =>
                                <tr key={index}
                                    style={{
                                        backgroundColor: index % 2 == 0 ? 'white': 'lightgrey'
                                    }}
                                >
                                    <td>
                                        {tournament.name}
                                    </td>
                                    <td>
                                        {tournament.founder}
                                    </td>
                                    <td>
                                        DATE
                                    </td>
                                    <td>
                                        <Button>Liity</Button>
                                    </td>
                                </tr>
                                
                            )
                        }
                    
                </tbody>
            </table>
        </>
    )
}