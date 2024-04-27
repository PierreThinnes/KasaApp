
import Collapse from "../../components/Collapse/Collapse.jsx";
import aboutJson from "../../../public/about.json";
import Banner from "../../layout/Banner/Banner.jsx";
/** EXPLICATION DU COMPOSANT "AboutPage" :
* C'est un composant qui affiche la page À propos.
* 
* @component
* @example
* return (
*   <AboutPage />
* )
*/
const AboutPage = () => {
  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend une bannière et une liste de composants `Collapse`,
  * un pour chaque élément dans `aboutJson`.
  * Chaque `Collapse` a un titre et un texte qui sont tirés de `aboutJson`.
  */
  return (
    <div >
      <Banner image={"src/assets/image/banner2.png"} showHeading={false}  />

      <div className="about">
        {aboutJson.map((collapse, index) => (
          <Collapse key={index} index={index} title={collapse.title}>
            {collapse.text}
            <p>{collapse.description}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
