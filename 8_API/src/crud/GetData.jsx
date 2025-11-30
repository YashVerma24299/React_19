import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function GetData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      // npx json-server db.json -> run this
      const url = "http://localhost:3000/users";
      let response = await fetch(url);
      response = await response.json();
      setUserData(response);
    } catch (e) {
      console.error("ERROR: ", e);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id) => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {
      method: "delete",
    });

    setUserData((prev) =>
      prev.filter((user) => String(user.id) !== String(id))
    );
  };

  if (loading) {
    return (
      <p className="min-h-screen flex items-center justify-center text-5xl font-bold">
        Loading...
      </p>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-500 p-6">
        {/* Title + Edit Button */}
        <div className="max-w-5xl mx-auto flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">My First API</h1>

          <Link
            to="/add"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            + Add User
          </Link>
        </div>

        {/* Table data */}
        <div className="max-w-5xl mx-auto bg-gray-300 rounded-lg shadow-md overflow-hidden">
          <div className=" grid grid-cols-[60px_1fr_3fr_60px_2fr] bg-gray-400 font-semibold text-center p-3">
            <h1>#</h1>
            <h1>Name</h1>
            <h1>email</h1>
            <h1>Age</h1>
            <h1>Delete</h1>
          </div>

          {userData &&
            userData.map((user) => {
              return (
                <div
                  key={String(user.id)}
                  className="grid grid-cols-[60px_1fr_3fr_60px_2fr] text-center p-3 border-t hover:bg-gray-200"
                >
                  <h1>{user.id}</h1>
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <h1>{user.age}</h1>

                  <div className=" flex  mx-auto gap-3">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 text-white py-1 px-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => navigate(`/edit/${user.id}`)}
                      className="bg-gray-500 text-black py-1 px-1 rounded hover:bg-gray-600"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
