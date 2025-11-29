// Useful for showing a waiting time during signup, on signup buttton par hii...
// useFormStatus -> work only for FORM
// useful to show a loading or pending state in FORM

import { useFormStatus } from "react-dom";

export default function UseFormStatus() {

    // This is a code structure bhaiiii
  const handleSubmit=async()=> {
    await new Promise(resolve=>setTimeout(resolve,3000))
    console.log("Submitted")
  }

  function CustomForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <>
        <input type="text" placeholder="enter name" />
        <br />
        <br />
        <input type="password" placeholder="enter password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
  }

  return (
    <>
      <h1>UseFormStatus</h1>
      <form action={handleSubmit}>
        <CustomForm />
      </form>
    </>
  );
}
