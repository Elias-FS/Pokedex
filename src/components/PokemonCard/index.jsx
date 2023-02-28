import "./PokemonCard.css";

export const PokemonCard = () => {
  return (
    <div className="container-card1">
      <div className="container-card2">
        <div class="grid-container1">
          <div class="item2">
          <img className="img-type" src="/img/charmander.png" alt="" />
          </div>
          <div class="item4">
            <img className="img-type" src="/img/typeFire.png" alt="" />
          </div>
          <div class="item3">
            <img className="img-pokemon" src="/img/charmander.png" alt="" />
          </div>
          <div class="item5">
            <h3>NOME</h3>
            <h4>ID</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
