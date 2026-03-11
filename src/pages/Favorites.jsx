import axios from "axios";
import { useState, useEffect} from "react";

export default function Favorites({ user }){
   const [favorites, setFavorites] = useState([]);
   const [pinnedLines, setPinnedLines] = useState([]);

   useEffect(() => {
      if(!user) return;

      async function fetchData() {
         try {
            const [favRes, pinRes] = await Promise.all([
               axios.get(`http://localhost:3000/api/favorites?userId=${user.id}`),
               axios.get(`http://localhost:3000/api/pinned?userId=${user.id}`)
            ]);
            setFavorites(favRes.data);
            setPinnedLines(pinRes.data);
         } catch (error) {
            console.error(error.message);
         }
      }
      fetchData();
   }, [user]);

   async function handleUnpin(id) {
      try {
         await axios.delete(`http://localhost:3000/api/pinned/${id}`);
         setPinnedLines(pinnedLines.filter(p => p._id !== id));
      } catch (error) {
         console.error(error.message);
      }
   }

   if (!user) return <p>Please log in to view your favorites!</p>

   return (
      <div id="favs">
         <section id="favLocations">
            <h1>Favorite Locations</h1>
            {favorites.length == 0 ? (
               <p>No favorite locations saved yet</p>
            ) : (
               favorites.map(fav => (
                  <div key={fav._id} className="favCard">
                     <h2>{fav.locationAddress}</h2>
                     {fav.category && <span>{fav.category}</span>}
                  </div>
               ))
            )}
         </section>
         <section id="favLines">
            <h1>Favorite Lines</h1>
            {pinnedLines.length == 0 ? (
               <p>No pinned lines yet</p>
            ) : (
               <div className="pinnedRoutes">
                  {pinnedLines.map(pin => (
                     <div key={pin._id} className="pinnedRoute">
                        <span>{pin.route}</span>
                        <button onClick={() => handleUnpin(pin._id)}>🗑️</button>
                     </div>
                  ))}
               </div>
            )}
         </section>
      </div>
   )
}