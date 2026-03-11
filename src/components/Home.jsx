import {useState, useEffect} from "react";
import axios from "axios";
import background from "../images/1921.jpg";
import TimeCard from "./TimeCard.jsx";

export default function Home(){
   const [stations, setStation] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         async (postion) => {
            try {
               const {latitude, longitude} = postion.coords;
               const response = await axios.get(`http://localhost:3000/api/mta/closest-stations?lat=${latitude}&lon=${longitude}`);
               setStation(response.data);
            } catch (error) {
               console.error(error.message);
               alert("No stations near you!");
            } finally {
               setLoading(false);
            }
         }
      )
   }, [])

   return (
      <>
         <img  id="background" src={background} alt="Metro Train Interior" />
         <h1 id="header">Live-Line</h1>
         {loading && <p>Finding nearby stations...</p>}
         <div id="stationsList">
            {stations.map(station => (
               <TimeCard key={station.id} station={station}/>
            ))}
         </div>
      </>
   )
}