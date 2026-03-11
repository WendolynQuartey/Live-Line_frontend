import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login( {setFormSubmit}) {
   const nav = useNavigate();
   const [formType, setFormType] = useState("login");
   const [userData, setUserData] = useState({
      name:"",
      email: "",
      password: "",
      location: {
         latitude: 43.000000,
         longitude:  -75.000000,
      }
   });

   function handleForm(type) {
      setFormType(type);
   }

   function handleChange(e){
     setUserData({...userData, [e.target.name]: e.target.value});
   }

   async function handleSubmit(e){
      e.preventDefault();
      try {
         if (formType == "login"){
            await axios.get("http://localhost:3000/api/users", {
               email: userData.email,
               password: userData.password
            });
         } else {
            await axios.post("http://localhost:3000/api/users", userData);
         }
         setFormSubmit(true);
         nav("/");
      } catch (error) {
         console.error(error.message);
         alert("Authentication failed!");
      }
   }

   return (
      <>
         <button onClick={() => handleForm("login")}>Log In</button>
         <button onClick={() => handleForm("signup")}>Sign Up</button>

         <form onSubmit={handleSubmit}>
            {formType === "signup" && (
               <input 
               type="text" 
               name="name" 
               placeholder="Full Name..." 
               value={userData.name}
               onChange={handleChange}
               required
               />
            )}
            <input 
            type="email" 
            name="email" 
            placeholder="Email..." 
            value={userData.email}
            onChange={handleChange}
            required
            />
            <input 
            type="password" 
            name="password" 
            placeholder="Password..." 
            value={userData.password}
            onChange={handleChange}
            required
            />
            {formType === "signup" && (
               <input 
               type="password" 
               name="confirmPassword" 
               placeholder="Confirm Password..." 
               onChange={(e) => {
                  if (e.target.value !== userData.password){
                     e.target.setCustomValidity("Passwords don't match!");
                  } else {
                     e.target.setCustomValidity("")
                  }
               }}
               required
              />
            )}

            <input 
            type="submit" value={formType === "login" ? "Log In" : "Sign Up"} />
         </form>
      </>
   )
}