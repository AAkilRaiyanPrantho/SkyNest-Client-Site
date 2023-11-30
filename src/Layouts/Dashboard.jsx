const Dashboard = () => {
  return (
    <div>
      <div className="drawer bg-orange-100 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-orange-200 ">
        <div>
            <h1 className="px-10 py-4 text-center text-3xl font-bold italic">SkyNest</h1>
        </div>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <a>Announcements</a>
            </li>
          </ul>
          <div className="divider divider-accent"></div>
          <ul className="menu p-4 w-80 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apartments</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
