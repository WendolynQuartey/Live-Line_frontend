import axios from "axios";

export default function TimeCard({station, user}){
   function formatTime(isoString){
      const diff = new Date(isoString) - new Date();
      const minutes = Math.floor(diff / 60000);
      if (minutes <= 0) return " Arriving";
      if (minutes == 1) return " in 1 min";
      return ` in ${minutes} mins`;
   };

   async function handlePin(route) {
      if (!user) return alert("Please log in to pin a line!");
      try {
         await axios.post("http://localhost:3000/api/pinned", {
            userId: user.id,
            route
         });
         alert(`${route} train pinned to favorites!`);
      } catch (error) {
         console.error(error.message);
         alert("Failed to pin line.");
      }
   }

   return(
      <div className="timeCard">
            <h2>{station.name}</h2>
         <div className="trains">
            <div className="direction">
               <h3>Uptown</h3>
               {station.upcomingTrains.N.length == 0 ? (
                  <p>No upcoming trains</p>
               ): (
                  station.upcomingTrains.N.map((train, i) => (
                     <div key={i} className="trainRow">
                        <span>
                           {train.route} train
                        </span>
                        <button onClick={() => handlePin(train.route)}>📌</button>
                        <span>
                           {formatTime(train.time)}
                        </span>
                     </div>
                  ))
               )}
            </div>

            <div className="direction">
               <h3>Downtown</h3>
               {station.upcomingTrains.S.length == 0 ? (
                  <p>No upcoming trains</p>
               ): (
                  station.upcomingTrains.S.map((train, i) => (
                     <div key={i} className="trainRow">
                        <span>
                           {train.route} train
                        </span>
                        <button onClick={() => handlePin(train.route)}>📌</button>
                        <span>
                           {formatTime(train.time)}
                        </span>
                     </div>
                  ))
               )}
            </div>

         </div>
      </div>
   )
}