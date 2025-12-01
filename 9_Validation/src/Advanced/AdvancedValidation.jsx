import { useState } from "react";
import styles from "./validation.module.css";

export default function AdvancedValidation() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.length < 3) error = "Minimum 3 characters";
      else if (value.length > 20) error = "Maximum 20 characters";
      else if (!/^[a-zA-Z ]+$/.test(value)) error = "Only alphabets allowed";
    }

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 8) error = "Minimum 8 characters";
      else if (!/[A-Z]/.test(value)) error = "Must contain an uppercase letter";
      else if (!/[a-z]/.test(value)) error = "Must contain a lowercase letter";
      else if (!/[0-9]/.test(value)) error = "Must contain a number";
      else if (!/[@$!%*?&]/.test(value))
        error = "Must contain a special character";
    }

    return error;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const errorMsg = validateField(name, value);
    setErrors({ ...errors, [name]: errorMsg });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nameError = validateField("name", form.name);
    const passwordError = validateField("password", form.password);

    setErrors({
      name: nameError,
      password: passwordError,
    });

    if (!nameError && !passwordError) {
      alert("✅ Form Submitted Successfully");
      console.log(form);
    }
  }

  return (
    <div className={styles.page}>
  <form className={styles.form} onSubmit={handleSubmit}>
    <input
      className={`${styles.input} ${errors.name ? styles.error : ""}`}
      type="text"
      name="name"
      placeholder="Enter name"
      value={form.name}
      onChange={handleChange}
    />
    <span className={styles.errorText}>{errors.name}</span>

    <input
      className={`${styles.input} ${errors.password ? styles.error : ""}`}
      type="password"
      name="password"
      placeholder="Enter password"
      value={form.password}
      onChange={handleChange}
    />
    <span className={styles.errorText}>{errors.password}</span>

    <button
      className={styles.button}
      disabled={
        errors.name ||
        errors.password ||
        !form.name ||
        !form.password
      }
    >
      Login
    </button>
  </form>
</div>

  );
}
