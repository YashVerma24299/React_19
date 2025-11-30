import { useState } from "react";
import { useNavigate } from "react-router";

export default function GetData() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        age: data.age,
      }),
    });

    response = await response.json();
    if (response) {
      alert("Congratulation new User Added!");
    }
    navigate('/');
  };
  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Add New User</h1>

      <div className="bg-gray-300 p-6 rounded-lg shadow-md w-96 space-y-4">
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter name"
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter email"
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          value={data.age}
          placeholder="Enter number"
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
          onChange={handleChange}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Add Data
        </button>
      </div>
      
    </div>
  );
}
