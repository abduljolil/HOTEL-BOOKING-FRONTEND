import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../Provider/AuthProvider';

 

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);

  const handleOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  const links = <>
  <li><Link to ='/'>Home</Link></li>
  <li><Link to ='/rooms'>Rooms</Link></li>
  {user?.email? <>
      <li><Link to ='/booking'>My Booking</Link></li>
      <li><button onClick={handleOut}>logOut</button></li>
  </>
  :<li><Link to ='/login'>Login</Link></li>    
}
  </>
  return (
      <div className="navbar bg-base-100 h-28 mb-4">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <div className="text-xl ">
                    {links}
                    </div>
                      
                  </ul>
                  <div>
                  <Link to= "/" className="btn btn-ghost normal-case text-xl">
                     <div className="flex flex-col">
                     <h1 className="text-3xl underline ">YOURK HOTEL</h1>
                     <h2 className=" text-xl">SINGAPORE</h2>
                     </div>
                </Link>
                  </div>
              </div>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
               {links}
              </ul>
          </div>
      </div>
  );
};

export default Navbar;