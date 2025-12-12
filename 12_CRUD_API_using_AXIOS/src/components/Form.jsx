import { useState, useEffect } from "react";
import { postApi, updateApi } from "../api/PostApi";

const Form = ({ data, setData, updateData, setUpdateData }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // ADD or UPDATE submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // -------------------
    // 🔵 UPDATE (EDIT MODE)
    // -------------------
    if (updateData) {
      const res = await updateApi(updateData.id, formData);

      // Replace updated record in UI
      const updatedList = data.map((item) =>
        item.id === updateData.id ? { ...item, ...formData } : item
      );

      setData(updatedList);
      setUpdateData(null); // exit edit mode
    } 
    
    else {
      // --------------
      // 🟢 ADD NEW POST
      // --------------
      const res = await postApi(formData);
      setData([...data, res.data]);
    }

    // RESET form
    setFormData({ title: "", body: "" });
  };

  // Autofill form when editing
  useEffect(() => {
    if (updateData) {
      setFormData({
        title: updateData.title || "",
        body: updateData.body || "",
      });
    }
  }, [updateData]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="enter body"
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
      />

      <br />

      <button>{updateData ? "Update" : "Add"}</button>
    </form>
  );
};

export default Form;
