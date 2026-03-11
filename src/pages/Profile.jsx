import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ user, setCurrentUser, setFormSubmit }) {
   const nav = useNavigate();
   const [edit, setEdit] = useState(false);
   const [formData, setFormData] = useState({
      name: user.name,
      email: user.email,
      password: "",
   });
   useEffect(() => {
      if (!user) nav("/login");
   }, [user]);

   if (!user) return null;

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   async function handleUpdate(e) {
      e.preventDefault();
      try {
         const res = await axios.put(`http://localhost:3000/api/users/${user.id}`, formData);
         setCurrentUser(res.data);
         setEdit(false);
         alert("Account has been updated!");
      } catch (error) {
         console.error(error.message);
         alert("Failed to update account!")
      }
   }

   async function handleDelete() {
      if (!window.confirm("Are you sure you want to delete your account? This cannot be undone.")) return;
      try {
         await axios.delete(`http://localhost:3000/api/users/${user.id}`);
         setCurrentUser(null);
         setFormSubmit(false);
         nav("/");
         alert("Account has been deleted.")
      } catch (error) {
         console.error(error.message);
         alert("Failed to delete account!")
      }
   }

   return (
      <div id="profile">
         <h1>Profile</h1>
         {!edit ? (
            <>
               <div id="profileInfo">
                  <p><span>Name: </span>{user.name}</p>
                  <p><span>Email: </span>{user.email}</p>
               </div>
               <div id="profileFeatures">
                  <button onClick={() => setEdit(true)}>Edit Account</button>
                  <button onClick={handleDelete}>Delete Account</button>
               </div>
            </>
         ) : (
            <form onSubmit={handleUpdate}>
               <input
                  type="text"
                  name="name"
                  placeholder="Full Name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
               <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  value={formData.password}
                  onChange={handleChange}
                  required
               />
               <button type="submit">Save Changes</button>
               <button onClick={() => setEdit(false)}>Cancel</button>
            </form>
         )}

      </div>
   )
}