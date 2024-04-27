
import Gallery from "../../components/LogementGallery/LogementGallery.jsx";
import Banner from "../../layout/Banner/Banner.jsx";

/** EXPLICATION DU COMPOSANT "HomePage" :
* C'est un composant qui affiche la page d'accueil du site.
* 
* @component
* @example
* return (
*   <HomePage />
* )
*/
function HomePage() {
  return (
    <>
      <Banner image={"src/assets/image/banner.png"} />
      <Gallery/>
    </>
  );
}

export default HomePage;