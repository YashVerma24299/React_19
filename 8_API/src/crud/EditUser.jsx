import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function EditUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url);
    response = await response.json();
    setData(response);
  }
  console.log(data);

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async () => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        age: data.age,
      }),
    });
    
    response = await response.json();
    if (response) {
      alert("User Data Updated!");
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Edit User Details</h1>

      <div className="bg-gray-300 p-6 rounded-lg shadow-md w-96 space-y-4">
        <input
          type="text"
          name="name"
          value={data.name}
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={data.email}
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          value={data.age}
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
          onChange={handleChange}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 "
          onClick={handleSubmit}
        >
          Update Data
        </button>
      </div>
    </div>
  );
}
