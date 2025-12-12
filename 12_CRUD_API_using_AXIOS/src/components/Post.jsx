import { useEffect } from "react";
import { deleteApi, getApi } from "../api/PostApi";
import { useState } from "react";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData]=useState(null);

  useEffect(() => {
    getData();
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwR_IPzN_B_Zg_swec1h_jA_T_g_F_g_T_g_T_g_T_g');
  }, []);

  const getData = async () => {
    const res = await getApi();
    console.log(res.data);
    setData(res.data);
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteApi(id);
      const neww = data.filter((item) => item.id != id);
      setData(neww);
      //   setData((prev) => prev.filter((items) => items.id != id));
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleEdit=(items)=>{
    setUpdateData(items)
  }

  return (
    <>
      <Form data={data} setData={setData} updateData={updateData} setUpdateData={setUpdateData}/>


      {data.map((items) => {
        return (
          <div
            key={items.id}
            style={{ background: "gray", margin: "10px", padding: "10px" }}
          >
            <p>{items.id}</p>
            <p>Title: {items.title}</p>
            <p>Body: {items.body}</p>
            <button onClick={() => handleEdit(items)}>Edit</button>
            <button onClick={() => handleDelete(items.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
