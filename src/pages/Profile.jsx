import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(){
   const nav = useNavigate();
   useEffect(() => {
      if(!user) nav("/login");
   }, [user]);

   if(!user) return null;

   return (
      <div id="profile">
         <h1>Profile</h1>
         <div id="profileInfo">
            <p><span>Name:</span>{user.name}</p>
            <p><span>Email:</span>{user.email}</p>
            <p><span>Location:</span>{user.location.latitude}, {user.location.longitude}</p>
         </div>
         <div id="profileFeatures">
           
         </div>
      </div>
   )
}