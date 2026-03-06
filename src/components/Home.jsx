import axios from "axios";
import Nav from "./Nav.jsx";
import background from "../images/1921.jpg";

export default function Home(){
   return (
      <>
         <img  id="background" src={background} alt="Metro Train Interior" />
         <h1 id="header">Live-Line</h1>
      </>
   )
}