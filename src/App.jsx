import Home from "./components/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Nav from "./components/Nav.jsx";
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/help" element={<Help />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
