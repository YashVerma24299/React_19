import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MyFirstApi() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
        setLoading(true);
        // npx json-server db.json -> run this
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
    } catch(e){
        console.error("ERROR: ", e);
    }
    finally{
        setLoading(false);
    }
    
  }

  if(loading){
    return(<p className="min-h-screen flex items-center justify-center text-5xl font-bold">Loading...</p>)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-500 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">My First API</h1>

        {/* Table data */}
        <div className="max-w-5xl mx-auto bg-gray-300 rounded-lg shadow-md overflow-hidden">
          <div className=" grid grid-cols-[80px_1fr_3fr_80px] bg-gray-400 font-semibold text-center p-3">
            <h1>#</h1>
            <h1>Name</h1>
            <h1>email</h1>
            <h1>Age</h1> 
          </div>

          {userData &&
            userData.map((user) => {
              return (
                <div
                  key={user.id}
                  className="grid grid-cols-[80px_1fr_3fr_80px] text-center p-3 border-t hover:bg-gray-200"
                >
                  <h1>{user.id}</h1>
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <h1>{user.age}</h1>
                </div>
              );
            })}

        </div>
      </div>
      
    </>
  );
}
