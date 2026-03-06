import {Link} from "react-router-dom";

export default function Nav(){
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
         <Link to="/login">
            <div>Login</div>
         </Link>
      </div>
   );
}