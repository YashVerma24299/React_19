// useActionState is used to manage form state while submitting a form action
// 👉 It works directly with <form action={...}></form>
// It consists 3 things:
// state → returned data (response)
// formAction → pass to form action
// isPending → loading state

import { useActionState } from "react";

export default function UseActionState() {
  const actionFunction = async (previousData, formData) => {
    let name = formData.get("userName");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    console.log(name,password);

    if (name && password) {
      return { message: "Data Submitted",name,password};
    } else {
      return { error: "Failed to Submit" };
    }
  };
  const [data, formAction, pending] = useActionState(actionFunction, undefined);
  console.log(data);

  return (
    <>
      <h1>useActionState Hook in React</h1>
      <form action={formAction}>
        <input type="text" placeholder="enter name" name="userName" />
        <br />
        <br />
        <input type="password" placeholder="enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
        <br />
      </form>
      
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

      {data?.message &&
        <div>
          <h3>Name: {data?.name}</h3>
          <h3>Password: {data?.password}</h3>
        </div>
      }
    </>
  );
}
