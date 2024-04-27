function Banner({ image, texte, showHeading=true }) {
    return (
      <div className="banner">
        <img className="banner__img" src={image} alt="Bannière" />
        <div className="banner__background"></div>
        {showHeading && <h1>Chez vous,<br className="break-line"/>partout et ailleurs</h1>}
      </div>
    );
  }
  
  export default Banner;