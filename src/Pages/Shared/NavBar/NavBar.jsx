import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { useContext } from "react";
import { FaDoorOpen } from "react-icons/fa6";
import '../NavBar/NavBar.css'


const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged Out"))
      .catch((error) => console.error(error));
  };


    const navOptions = <>
    <li><Link to={'/'}>Home🏠</Link></li>
    <li><Link to={'/Apartments'}>Apartments</Link></li>
    </>
    return (
        <div className="navbar bg-orange-100 mb-2 lg:px-32">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <p className="font-bold text-xl">SkyNest</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  {user ? (
          <>
          {" "}
          <div className="navbar-end z-10">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <>
                      <img src={user.photoURL} alt="" />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://i.ibb.co/S68L7kq/Photo-not-available-man.jpg"
                        alt=""
                      />
                    </>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 border-y-1 border-orange-200 rounded-box w-52"
              >
                <li>
                  <h1 className="font-bold text-lg uppercase italic">{user ? <span>{user.displayName}</span> : user.email}</h1>
                </li>
                <li>
                  <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout<FaDoorOpen/></a>
                </li>
              </ul>
            </div>
          </div>
        </>
        ) : (
          <>
            <div className="navbar-end">
              <ul>
                <li>
                  <NavLink to={"/signUp"}>
                    <button className="btn btn-ghost">Register</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
  );
};

export default NavBar;