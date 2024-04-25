import BannerHome from "../../layout/BannerHome/BannerHome.jsx";
import Gallery from "../../components/LogementGallery/LogementGallery.jsx";
import LogementPage from "../../pages/LogementPage/LogementPage.jsx";

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
      <BannerHome />
      <Gallery/>
    </>
  );
}

export default HomePage;