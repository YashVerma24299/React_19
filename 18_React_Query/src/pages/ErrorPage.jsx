import { useNavigate ,useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate(-1);
    }

  const error = useRouteError();
  console.log(error);
  console.log(error.data);

  return (
    <>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
