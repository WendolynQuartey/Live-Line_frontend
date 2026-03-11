import Home from "./components/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Nav from "./components/Nav.jsx";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {useState} from "react";

function App() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <Nav formSubmit={formSubmit}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites user={currentUser}/>} />
        <Route path="/help" element={<Help />}/>
        <Route path="/login" element={<Login setFormSubmit={setFormSubmit} setCurrentUser={setCurrentUser}/>}/>
        <Route path="/profile" element={formSubmit ? <Profile user={currentUser}/> :  <Login setFormSubmit={setFormSubmit}  setCurrentUser={setCurrentUser}/>} />
      </Routes>
    </div>
  )
}

export default App
