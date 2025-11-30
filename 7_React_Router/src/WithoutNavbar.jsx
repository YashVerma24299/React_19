import React from "react";
import { Link } from "react-router";

export default function WithoutNavbar() {
  return (
    <div className="min-h-screen flex  flex-col items-center justify-center text-3xl">
      <h1 className="text-6xl">No NavBar</h1>
      <Link className="text-1xl pt-7" to={"/"}> 🏠 Go to Home</Link>
    </div>
  );
}
