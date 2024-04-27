import { useEffect, useState } from "react";
import LogementCard from "../LogementCard/LogementCard.jsx";
import { logementsGetAll } from "../../services/API.js";

function LogementGallery() { 

  const [logements, setLogements] = useState([]);

  useEffect(() => {
    logementsGetAll()
      .then(setLogements)
      .catch(console.error);
  }
  , []);

  return (
    <div className="logement-gallery">
      {logements.map((logement, logementCard) => (
        <LogementCard title={logement.title} key={logementCard} imageUrl={logement.cover} id={logement.id} />
      ))}
    </div>
  );
};

export default LogementGallery;