import "./NotFound.css";

export const NotFound = () => {
  return (
    <>
      <div className="container-404">
        <img
          src={"/img/pokemon404.png"}
          alt="logo_pokemon"
          className="img-404"
        />
      </div>
      <div className="container-button">
        <a href="/">Voltar</a>
      </div>
    </>
  );
};
