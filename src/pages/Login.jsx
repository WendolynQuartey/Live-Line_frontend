import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export default function Login( {setFormSubmit}) {
   const nav = useNavigate();
   const [formType, setFormType] = useState("login")


   function handleForm(type) {
      setFormType(type);
   }

   async function handleSubmit(e){
      e.preventDefault();
      try {
         let res = await axios.post("http://localhost:3000/api/users");
         setFormSubmit(true);
         nav("/")
      } catch (error) {
         console.error(error.message);
      }
   }

   return (
      <>
         <button onClick={() => handleForm("login")}>Log In</button>
         <button onClick={() => handleForm("signup")}>Sign Up</button>

         <form onSubmit={handleSubmit}>
            {formType == "signup" && (
               <input type="text" placeholder="Full Name..." />
            )}
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            {formType == "signup" && (
               <input type="password" placeholder="Confirm Password..." />
            )}

            <input type="submit" value={formType === "login" ? "Log In" : "Sign Up"} />
         </form>
      </>
   )
}