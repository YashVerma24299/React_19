// https://github.com/typicode/json-server
import UserAdd from "./crud/AddUser";
import EditUser from "./crud/EditUser";
import MyApi from "./crud/MyApi";
import FetchData from "./fetchData/FetchData";
import MyFirstApi from "./myPersonalApi/MyFirstApi";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      {/* <FetchData/> */}
      {/* <MyFirstApi/> */}

      <Routes>
        <Route path="/" element={<MyApi/>} />
        <Route path="/add" element={<UserAdd/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </>
  );
}
