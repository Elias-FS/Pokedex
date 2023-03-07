import "./PokemonPokebola.css";
import { FC } from "react";

interface pokemon {
  id: number;
  name: string;
  description: string;
  img: string;
  gif: string;
  type: string;
  HP: number;
  Attack: number;
  Defense: number;
  Special_Attack: number;
  Special_Defense: number;
  Speed: number;
}

export const PokemonPokebola: FC<pokemon> = ({
  id,
  name,
  description,
  img,
  gif,
  type,
  HP,
  Attack,
  Defense,
  Special_Attack,
  Special_Defense,
  Speed,
}) => {
  return (
    <div className="card">
      <div className="pokebola">
        <img
          src={"/img/pokémon_logo.svg.png"}
          alt="logo_pokemon"
          className="logo"
        />
        <div className="line"></div>
        <div className="circle"></div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="content">
        <div className="leds">
          <div className="circle6"></div>
          <div className="circle8"></div>
          <div className="circle7"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
        </div>
        <h2>{name}</h2>
        <h3>Pokémon tipo {type}</h3>
        <h4>Status:</h4>
        <p>HP: {HP}</p>
        <p>Attack: {Attack}</p>
        <p>Defense: {Defense}</p>
        <p>Special-Attack: {Special_Attack}</p>
        <p>Special-Defense: {Special_Defense}</p>
        <p>Speed: {Speed}</p>
        <p>#{id}</p>
      </div>
      <img src={img} alt={`pokemon-${img}`} className="pokemon_img" />
    </div>
  );
};
