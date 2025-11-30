// BrowserRouter enables client-side routing using the browser's History API.
// Client-side routing means when navigating from one route to another,
// the entire page does NOT reload — only the required component updates.
// Server-side routing reloads the page on every route change.

// Routes → Route rakhne ka box
// Route → Path + Component
// Link → Move karne ka button


// Good
// Difference between Link and NavLink

import { Navigate, Route, Routes } from "react-router";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import WithoutNavbar from "./WithoutNavbar";

export default function App() {
  return (
    <>
      <Routes>
        {/* In navbar, add Outlet to show the data of routes */}
        <Route element={<Navbar/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Route Prefixes */}
          <Route path="/pefixes1">
            <Route path="/pefixes1/prefixes2">
              <Route path="/pefixes1/prefixes2/about" element={<About />} />
            </Route>
          </Route>
          
          {/* Nested Routing  + (Index)Default Student Page*/}
          <Route path="/college" element={<College />}>
            <Route index element={<Student/>} />         
            <Route path="department" element={<Department/>} />
            <Route path="details" element={<Details/>} />
          </Route>

          {/* <Route path="*" element={<NotFound  />} /> */}
          {/* for Redirecting */}
          <Route path="*" element={<Navigate to='/login'/>}/>  
        </Route> 

        <Route path="/withoutNavbar" element={<WithoutNavbar />} />
      </Routes>
    </>
  );
}
