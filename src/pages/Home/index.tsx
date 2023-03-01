import "./Home.css";
import { useEffect, useMemo, useState } from "react";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

// Componentes
import { PokemonPokebola } from "../../components/PokemonPokebola";

// recoil: atoms
import {
  atomPokemonFetch,
  atomPokemonList,
  atomPokemonOffset,
  atomPokemonSearch,
} from "../../recoil/atoms";

// recoil: selectors
import {
  selectorFetchPokemons,
  selectorGetPokemon,
  selectorGetPokemons,
} from "../../recoil/selectors";
import { PokemonCard } from "../../components/PokemonCard";

// ::
export const Home = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  // recoil: states
  const setPokemon = useSetRecoilState(atomPokemonSearch);
  const setFecthPokemons = useSetRecoilState(atomPokemonFetch);
  const [pokemonsOffset, setPokemonsOffset] = useRecoilState(atomPokemonOffset);
  const [pokemonList, setPokemonList] = useRecoilState(atomPokemonList);
  const retryFethMorePokemon = useRecoilRefresher_UNSTABLE(
    selectorFetchPokemons
  );

  // recoil: loadable
  const getLoadablePokemons = useRecoilValueLoadable(selectorGetPokemons);
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
  const fetchLoadablePokemon = useRecoilValueLoadable(selectorFetchPokemons);

  // memo: states
  const disabledFetchMorePokemons = useMemo(() => {
    if (
      fetchLoadablePokemon.state === "hasError" ||
      fetchLoadablePokemon.state === "loading" ||
      getLoadablePokemons.state === "hasError" ||
      getLoadablePokemons.state === "loading"
    ) {
      return true;
    } else {
      return false;
    }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state]);

  const hasFetchPokemonError = useMemo(() => {
    if (
      fetchLoadablePokemon.state === "hasError" ||
      getLoadablePokemons.state === "hasError"
    ) {
      return true;
    } else {
      return false;
    }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state]);

  useEffect(() => {
    if (
      fetchLoadablePokemon.state === "hasValue" &&
      fetchLoadablePokemon.contents !== undefined
    ) {
      setPokemonCount(fetchLoadablePokemon.contents.count);
      setFecthPokemons(fetchLoadablePokemon.contents.results);
    }
  }, [fetchLoadablePokemon.state, fetchLoadablePokemon.contents]);

  useEffect(() => {
    if (
      getLoadablePokemons.state === "hasValue" &&
      getLoadablePokemons.contents !== undefined
    ) {
      if (pokemonList.length > 0) {
        setPokemonList(pokemonList.concat(getLoadablePokemons.contents));
      } else {
        setPokemonList(getLoadablePokemons.contents);
      }
    }
  }, [getLoadablePokemons.state, getLoadablePokemons.contents]);

  const pokemonStyle = [
    {
      colors: {
        types: {
          normal: {
            edge: "#919AA2",
            backgroundCard: "#C8CBCD",
          },
          fire: {
            edge: "#DA2C33",
            backgroundCard: "#F5D789",
          },
          water: {
            edge: "#3692DC",
            

          },
          grass: {
            edge: "#02913A",
            backgroundCard: "#C8EBBF",
          },
          ice: {
            edge: "#38A3C4",
            backgroundCard: "#C1E2EC",
          },
          fighting: {
            edge: "#E0306A",
            backgroundCard: "#E7A8BD",
          },
          poison: {
            edge: "#B15192",
            backgroundCard: "#CFAAC3",
          },
          ground: {
            edge: "#919AA2",
            backgroundCard: "#C8CBCD",
          },
          flying: {
            edge: "#648ABC",
            backgroundCard: "#BBCEE8",
          },
          psychic: {
            edge: "#FF6675",
            backgroundCard: "#FCD4D8",
          },
          bug: {
            edge: "#A5B614",
            backgroundCard: "#DDE1BA",
          },
          rock: {
            edge: "#6B6A67",
            backgroundCard: "#C0BFBC",
          },
          ghost: {
            edge: "#594593",
            backgroundCard: "#BAB0D7",
          },
          dragon: {
            edge: "#7C6DA4",
            backgroundCard: "#B4ADC7",
          },
          dark: {
            edge: "#623A26",
            backgroundCard: "#AA968C",
          },
          steel: {
            edge: "#5A8EA2",
            backgroundCard: "#C6DDE5",
          },
          fairy: {
            edge: "#FB89EB",
            backgroundCard: "#FFDBFA",
          },
        },
      },
    },
  ];

  console.log(pokemonList);

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
        <a href="#">Home</a>
        <a href="#">Sobre mim</a>
        <a href="#">Tecnologias utilizadas</a>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card2">
            <h2>Digite o nome de um pokémon ou seu ID para capturá-lo:</h2>
            <h5>
              Clique ou passe o mouse na pokébola para visualizar o pokémon
              capturado.
            </h5>
            <input
              className="search-Pokemon"
              type="text"
              onChange={(event) => setSearchPokemon(event.target.value)}
            />
            <button onClick={() => setPokemon(searchPokemon)}>Procurar</button>
            {getLoadablePokemon?.state === "loading" && (
              <div>Capturado pokémon...</div>
            )}
            {getLoadablePokemon?.state === "hasValue" &&
              getLoadablePokemon?.contents !== undefined && (
                <>
                  <p>Pokémon Capturado!!!</p>
                  <p>Verifique a pokébola!</p>
                </>
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
            <h2>Lista de Pokémons</h2>
            <h5>{pokemonCount} Pokémons</h5>
            <div className="container-card">
              <div className="row">
                {pokemonList.map((pokemon) => (
                  <div className="column">
                    <div className="card3">
                      {pokemonStyle.map((pokemonStyle) => (
                        <PokemonCard
                          id={pokemon.id}
                          name={pokemon?.types?.["0"]?.["type"]?.name }
                          img={
                            pokemon.sprites?.other?.dream_world
                              ?.front_default ||
                            pokemon.sprites?.other?.["official-artwork"]
                              ?.front_default ||
                            ""
                          }
                          type={""}
                          gif={
                            pokemon?.sprites?.versions?.["generation-v"]?.[
                              "black-white"
                            ]?.animated?.front_default || ""
                          }
                          cardEdge={
                            pokemon?.types?.["0"]?.["type"]?.name === "grass"
                              ? pokemonStyle.colors.types.grass.edge
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name === "fire"
                              ? pokemonStyle.colors.types.fire.edge
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name ===
                                  "water"
                              ? pokemonStyle.colors.types.water.edge
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name === "bug"
                              ? pokemonStyle.colors.types.bug.edge
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name ===
                                  "normal"
                              ? pokemonStyle.colors.types.normal.edge
                              : "" ||
                              pokemon?.types?.["0"]?.["type"]?.name === "electric"
                            ? pokemonStyle.colors.types.electric.edge
                            : ""
                          }
                          cardBackgroundColor={
                            pokemon?.types?.["0"]?.["type"]?.name === "grass"
                              ? pokemonStyle.colors.types.grass.backgroundCard
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name === "fire"
                              ? pokemonStyle.colors.types.fire.backgroundCard
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name ===
                                  "water"
                              ? pokemonStyle.colors.types.water.backgroundCard
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name === "bug"
                              ? pokemonStyle.colors.types.bug.backgroundCard
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name ===
                                  "normal"
                              ? pokemonStyle.colors.types.normal.backgroundCard
                              : "" ||
                                pokemon?.types?.["0"]?.["type"]?.name ===
                                  ["electric" || "eletric"]
                              ? pokemonStyle.colors.types.electric.backgroundCard
                              : ""
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              disabled={disabledFetchMorePokemons}
              onClick={() => setPokemonsOffset(pokemonsOffset + 10)}
            >
              Carregar mais
            </button>
            {hasFetchPokemonError && (
              <button onClick={() => retryFethMorePokemon()}>
                Tentar Novamente
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </>
  );
};
