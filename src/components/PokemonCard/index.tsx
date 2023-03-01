import "./PokemonCard.css";
import { FC } from "react";

interface pokemonData {
  id: number;
  name: string;
  img: string;
  type: string;
  gif: string;
  edge: string;
  backgroundCard: string;
}

export const PokemonCard: FC<pokemonData> = ({
  id,
  name,
  img,
  type,
  gif,
  edge,
  backgroundCard,
}) => {
  return (
    <div className="container-card1">
      <div className="container-card2">
        <div className="grid-container1">
          <div className="item2">
            <img className="img-type" src={gif} alt={`gif-pokemon-${img}`} />
          </div>
          <div className="item4">
            <img className="img-type" src="/img/typeFire.png" alt="" />
          </div>
          <div className="item3">
            <img className="img-pokemon" src={img} alt={`pokemon-${img}`} />
          </div>
          <div className="item5">
            <h3>{name}</h3>
            <h4>#{id}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
