import { useLoaderData } from "react-router-dom";

import { getCommunications } from "../../services/getCommunications";
import CommunicationItem from "./CommunicationItem";
import Title from "../../ui/Title";

function Communications() {
  const communications = useLoaderData();

  return (
    <div className="relative flex h-full flex-col">
      <div className="pb-5">
        <Title>Comunicazioni</Title>
      </div>
      <div className="overflow-auto">
        <ul>
          {communications.map((communication) => (
            <CommunicationItem
              key={communication.id}
              communication={communication}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader() {
  const communications = await getCommunications();
  return communications;
}

export default Communications;
