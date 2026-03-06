import { useState } from "react";

export default function Login() {
   const [formType, setFormType] = useState("login")


   function handleForm(type) {
      setFormType(type);
   }

   return (
      <>
         <button onClick={() => handleForm("login")}>Log In</button>
         <button onClick={() => handleForm("signup")}>Sign Up</button>

         <form>
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