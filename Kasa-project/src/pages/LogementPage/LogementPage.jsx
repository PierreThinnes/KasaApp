import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel.jsx";
import Tags from "../../components/tags/Tags.jsx";
import Rating from "../../components/rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { logementGetById } from "../../services/API.js";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
/** EXPLICATION DU COMPOSANT "LogementPage" :
* Le composant LogementPage est une fonction JavaScript qui représente la page de détails d'un logement.
* 
* @component
* @example
* return (
*   <LogementPage />
* )
*/
function LogementPage() {

/** Il commence par extraire l'ID du logement à partir des paramètres de l'URL à l'aide du hook useParams.
* Ensuite, il utilise le hook useState pour définir un état selectedById qui contiendra les détails du logement une fois récupérés.
*/    

    const { id } = useParams();
    const [selectedById, setSelectedById] = useState(null);

/** Il utilise également le hook useEffect pour effectuer une requête pour obtenir les détails du logement lors de son montage.*/    

    useEffect(() => {
        logementGetById(id)
            .then((result) => {
                setSelectedById(result);
            })
            .catch(console.error);
    }, []);

/** Si les détails du logement ne sont pas encore récupérés, il affiche "Loading...".
* S'il y a une erreur lors de la récupération des détails du logement, il affiche une page d'erreur. 
*/

    if (selectedById == undefined) return <ErrorPage />;
    if (selectedById == null) return <div>Loading...</div>;

/** Le composant rend une structure HTML avec plusieurs éléments pour afficher les détails du logement.
* Il utilise le composant Carousel pour afficher les images du logement.
* Il affiche le titre, l'emplacement, les tags, l'hôte, la notation, la description et les équipements du logement.
*/

    return (
        <div className="logement">
            <Carousel slides={selectedById.pictures} />

            <div className="logement__description">
                <div className="logement__description__top">
                    <div className="logement__description__top--info">
                        <h1> {selectedById.title} </h1>
                        <h2> {selectedById.location} </h2>
                        <div className="logement__description__top--block-tags">
                            {selectedById.tags.map((tag, index) => (
                            <Tags key={index} text={tag} />
                            ))}
                        </div>
                    </div>

                    <div className="logement__description__top--host-block">
                        <div className="logement__description__top--host-block--host">
                            <h3> {selectedById.host.name} </h3>
                            <img src={selectedById.host.picture} alt={selectedById.title} />
                        </div>
                        <div className="rating">
                            <Rating rating={parseInt(selectedById.rating, 10)} />
                        </div>
                    </div>
                </div>

                <div className="logement__description--bottom">
                    <Collapse title="Description">{selectedById.description}</Collapse>
                    <Collapse title="Equipement">
                        <ul>
                            {selectedById.equipments.map((equip, index) => (
                                <li key={index}>{equip}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    )
} 

export default LogementPage;
