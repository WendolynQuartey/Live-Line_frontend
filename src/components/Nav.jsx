import {Link} from "react-router-dom";

export default function Nav({ formSubmit }){
   return (
      <div className="Nav">
         <Link to="/">
            <div>Home</div>
         </Link>
         <Link to="/favorites">
            <div>Favorites</div>
         </Link>
         <Link to="/help">
            <div>Help</div>
         </Link>
         {formSubmit ? (
            <Link to="/profile">
            <div>Profile</div>
         </Link>
         ): (
            <Link to="/login">
            <div>Login</div>
         </Link>
         )}
      </div>
   );
}