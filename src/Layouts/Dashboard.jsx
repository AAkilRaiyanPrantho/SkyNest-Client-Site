import { useContext } from "react";
import { FaBuilding, FaCapsules, FaHouseMedical, FaMicrophone, FaNoteSticky, FaPeopleGroup, FaReceipt, FaUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProviders/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="drawer bg-orange-100 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Page content here */}
          <div><h1 className="font-semibold text-2xl underline py-5">Welcome back to your SkyNest DashBoard</h1></div>
          <div><Outlet></Outlet></div>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side bg-orange-200 ">
        <div>
            <h1 className="lg:px-10 lg:py-4 text-center text-3xl font-bold italic">SkyNest</h1>
        </div>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>{
            user.email === 'prantho98@gmail.com'? <>
            <ul className="menu p-4 w-80 min-h-full text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={'/dashboard/myProfile'}>
                <FaUser></FaUser> Admin Profile</Link>
            </li>
            <li>
              <Link to={'/dashboard/announcements'}>
                <FaNoteSticky></FaNoteSticky>All Announcements</Link>
            </li>
            <li>
              <Link to={'/dashboard/makeAnnouncements'}>
                <FaMicrophone></FaMicrophone> Make Announcements</Link>
            </li>
            <li>
              <Link to={'/dashboard/manageMembers'}>
                <FaPeopleGroup></FaPeopleGroup> Manage Members</Link>
            </li>
            <li>
              <Link to={'/dashboard/manageCoupons'}>
                <FaCapsules></FaCapsules> Manage Coupons</Link>
            </li>
            <li>
              <Link to={'/dashboard/agreementRequests'}>
               <FaReceipt></FaReceipt> Agreement Requests</Link>
            </li>
            <li>
            <div className="divider divider-accent"></div>
            </li>
            <li>
              <Link to={'/'}>
                <FaHouseMedical></FaHouseMedical> Home</Link>
            </li>
            <li>
            <Link to={'/apartments'}>
                <FaBuilding></FaBuilding> Apartments</Link>
            </li>
          </ul>
            </>
            :
            <>
            <ul className="menu p-4 w-80 min-h-full text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={'/dashboard/myProfile'}>
                <FaUser></FaUser> My Profile</Link>
            </li>
            <li>
              <Link to={'/dashboard/announcements'}>
                <FaNoteSticky></FaNoteSticky> Announcements</Link>
            </li>
            <li>
            <div className="divider divider-accent"></div>
            </li>
            <li>
              <Link to={'/'}>
                <FaHouseMedical></FaHouseMedical> Home</Link>
            </li>
            <li>
            <Link to={'/apartments'}>
                <FaBuilding></FaBuilding> Apartments</Link>
            </li>
          </ul>
            </>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
