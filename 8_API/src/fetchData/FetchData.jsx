import { useState } from "react";
import { useEffect } from "react";

export default function FetchData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response.users);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-500 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Fetch userData</h1>

        {/* Table data */}
        <div className="max-w-5xl mx-auto bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className=" grid grid-cols-3 bg-gray-400 font-semibold text-center p-3">
            <h1>FirstName</h1>
            <h1>LastName</h1>
            <h1>Age</h1> 
          </div>

          {userData &&
            userData.map((user) => {
              return (
                <div
                  key={user.id}
                  className="grid grid-cols-3 text-center p-3 border-t hover:bg-gray-100"
                >
                  <h1>{user.firstName}</h1>
                  <h1>{user.lastName}</h1>
                  <h1>{user.age}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
