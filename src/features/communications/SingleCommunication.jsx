import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { getCommunications } from "../../services/getCommunications";
import { useLoaderData } from "react-router-dom";

function SingleCommunication() {
  const { title, description } = useLoaderData();
  return (
    <div>
      <Button to="/comunicazioni" type="small">
        <i className="fa-solid fa-arrow-left"></i> Indietro
      </Button>
      <div className="mt-5">
        <Title>{title}</Title>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const communications = await getCommunications();
  const communication = communications.filter(
    (communication) => communication.id === params.communicationId
  );
  return communication[0];
}

export default SingleCommunication;
