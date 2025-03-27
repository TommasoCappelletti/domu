import { useNavigate, useRouteError } from "react-router-dom";
import Title from "./Title";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <Title>Something went wrong 😢</Title>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
