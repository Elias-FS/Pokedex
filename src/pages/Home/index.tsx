import "./Home.css";
import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

// Componentes
import { PokemonPokebola } from "../../components/PokemonPokebola";

// recoil: atoms
import { atomPokemon } from "../../recoil/atoms";

// recoil: selectors
import { selectorGetPokemon } from "../../recoil/selectors";
import { PokemonCard } from "../../components/PokemonCard";

// ::
export const Home = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState("");

  // recoil: states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);

  // recoil: loadable
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);

  console.log(getLoadablePokemon?.contents);

  return (
    <>
      <div className="header">
        <img
          width="450px"
          src={"/img/pokémon_logo.svg.png"}
          alt="logo_pokemon"
          className="logo"
        />
      </div>

      <div className="topnav">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card2">
            <h2>Veja seu pokémon na pokébola</h2>
            <h5>clique ou passe o mouse na pokébola</h5>
            <input
              className="search-Pokemon"
              type="text"
              onChange={(event) => setSearchPokemon(event.target.value)}
            />
            <button onClick={() => setPokemon(searchPokemon)}>Procurar</button>
            {getLoadablePokemon?.state === "loading" && (
              <div>Carregando...</div>
            )}
            {getLoadablePokemon?.state === "hasValue" &&
              getLoadablePokemon?.contents !== undefined && (
                <div>
                  <img
                    width="50px"
                    src={
                      getLoadablePokemon?.contents?.sprites?.versions?.[
                        "generation-v"
                      ]?.["black-white"]?.animated?.front_default
                    }
                    alt=""
                  />
                </div>
              )}
            <div className="container-pokebola">
              <PokemonPokebola
                name={getLoadablePokemon?.contents?.name || "????"}
                id={getLoadablePokemon?.contents?.id || " - - - "}
                description={""}
                img={
                  getLoadablePokemon?.contents?.sprites?.other?.dream_world
                    ?.front_default ||
                  getLoadablePokemon?.contents?.sprites?.other?.[
                    "official-artwork"
                  ]?.front_default ||
                  "/img/interrogacao.png"
                }
                gif={
                  getLoadablePokemon?.contents?.sprites?.versions?.[
                    "generation-v"
                  ]?.["black-white"]?.animated?.front_default
                }
                type={
                  getLoadablePokemon?.contents?.types?.["0"]?.["type"]?.name ||
                  " ? ? ? "
                }
                HP={
                  getLoadablePokemon?.contents?.stats?.["0"]?.base_stat || " ? "
                }
                Attack={
                  getLoadablePokemon?.contents?.stats?.["1"]?.base_stat || " ? "
                }
                Defense={
                  getLoadablePokemon?.contents?.stats?.["2"]?.base_stat || " ? "
                }
                Special_Attack={
                  getLoadablePokemon?.contents?.stats?.["3"]?.base_stat || " ? "
                }
                Special_Defense={
                  getLoadablePokemon?.contents?.stats?.["4"]?.base_stat || " ? "
                }
                Speed={
                  getLoadablePokemon?.contents?.stats?.["5"]?.base_stat || " ? "
                }
              />
            </div>
          </div>
          <div className="card2">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="container-card">
              <div className="row">
                <div className="column">
                  <div className="card3">
                    <PokemonCard />
                  </div>
                </div>
                <div className="column">
                  <div className="card3">
                    <PokemonCard />
                  </div>
                </div>

                <div className="column">
                  <div className="card3">
                    <PokemonCard />
                  </div>
                </div>

                <div className="column">
                  <div className="card3">
                    <PokemonCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </>
  );
};
