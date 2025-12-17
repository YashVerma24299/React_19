import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string()
    .min(5, "Minimum 5 character")
    .max(10, "Maximum 10 characters")
    .required("Please enter name"),
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().min(6, "minimum 6").required("please enter password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      validate: (values) => {
        const errors = {};
        if (!values.email) errors.email = "No need to return like this ERROR";
        return errors;
      },

      onSubmit: (values, action) => {
        console.log(errors);
        console.log(values);

        action.resetForm();
      },
    });
  console.log(values);
  console.log(errors);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">Registration</h2>
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border px-3 py-2 rounded outline-none"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="text-red-500 text-xs">{errors.name}</p>
            ) : null}
          </div>
          <div className="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border px-3 py-2 rounded outline-none"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-xs">{errors.email}</p>
            ) : null}
          </div>
          <div className="">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border px-3 py-2 rounded outline-none"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 text-xs">{errors.password}</p>
            ) : null}
          </div>
          <div className="">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              className="w-full border px-3 py-2 rounded outline-none"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-red-500 text-xs">{errors.confirm_password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
