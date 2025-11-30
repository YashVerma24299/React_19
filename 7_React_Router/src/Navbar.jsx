import { Link, Outlet } from "react-router";

export default function  Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between p-3 shadow-lg rounded-b-lg">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div >
          <ul className="flex gap-4">
            <li>
              <Link to="/pefixes1/prefixes2/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/withoutNavbar">No Navbar</Link>
            </li>
            <li>
              <Link to="/college">College</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
