import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {

    const [value, setValue] = useState()

    const navigation = useNavigate()

    return (
        <>
            <Box sx={{ position: 'fixed', bottom: 10, width: '100%' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="Etusivu" onClick={() => navigation("/")} />
                    <BottomNavigationAction label="Luo uusi" onClick={() => navigation("/create")} />
                    <BottomNavigationAction label="Kaverit" />
                </BottomNavigation>
          </Box>
        </>
    )
}