import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CreateTournament from "./components/create/CreateTournamet";
import Home from "./components/frontpage/Home";
import Header from "./components/header/Header";
import BottomNav from "./components/navigation/BottomNav";
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Settings from "./components/profile/Settings";
import UserState from "./context/user_context/UserState";

function App() {
    
  return (
    <UserState>
      <BrowserRouter>
        <div className="App">                   
            <Header /> 
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/settings" exact element={<Settings />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/create" exact element={<CreateTournament />} />
          </Routes>    
          <BottomNav />
        </div>
      </BrowserRouter>
    </UserState>
  );
}

export default App;
