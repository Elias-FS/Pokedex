import "./PokemonCard.css";
import { FC } from "react";

interface pokemonData {
  id: number;
  name: string;
  img: string;
  type: string;
  gif: string;
  cardEdge: string;
  cardBackgroundColor: string;
}

export const PokemonCard: FC<pokemonData> = ({
  id,
  name,
  img,
  type,
  gif,
  cardEdge,
  cardBackgroundColor,
}) => {
  const css1 = { backgroundColor: cardEdge }
  const css2 = { backgroundColor: cardBackgroundColor }

  return (
    <div className="container-card1" style={css1}>
      <div className="container-card2" style={css2}>
        <div className="grid-container1">
          <div className="item2">
            <img className="img-type" src={gif} alt={`gif-pokemon-${img}`} />
          </div>
          <div className="item4">
            <img className="img-type" src={type} alt="" />
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
