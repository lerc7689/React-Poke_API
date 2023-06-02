import { useState, useEffect } from "react";
import getPokemonById from "../../services/getPokemonById";
import "./PokemonCard.css";
import backpokeball from "../../assets/img/back-pokeball.png"

const PokemonCard = ({pokemonID}) =>{
    const [pokemon, setPokemon] = useState();

    const loadPokemonById = async () =>{
        const pokemon = await getPokemonById(parseInt(pokemonID))
        setPokemon(pokemon)
    }

    const getPokemonImg = (sprites) => {

        const firstOption = sprites?.other.dream_world.front_default;
        const secondOption = sprites?.other['official-artwork'].front_default;
        const thirdOption = sprites?.other.home.front_default;
    
         if (firstOption) return firstOption;
         if (secondOption) return secondOption;
         if (thirdOption) return thirdOption;
    }


    useEffect(()=>{
        loadPokemonById()
    },[pokemon])
    return(
    <>
    <div className="pokemonCard"  id={pokemon?.id}>
        <h2 className="title"  id={pokemon?.id}>{pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1)}</h2>
        <div className="image_container">
            <img className="frontimg"src={getPokemonImg(pokemon?.sprites)} alt="" id={pokemon?.id}/>
            <img className="backimg" src={backpokeball} alt="" id={pokemon?.id}/>
        </div>
        <div className="types_container" id={pokemon?.id}>
            <b id={pokemon?.id}>Type </b>

            <div className="singletypescontainer">
            {pokemon?.types.map(t =>
            <p key={t.type.name} id={pokemon?.id}>{t.type.name[0].toUpperCase() + t.type.name.slice(1)}   </p>)}
            </div>

        </div>
        <div className="stats_container" id={pokemon?.id}>
            {pokemon?.stats.map(s =>
                    <div className="progress-bar_pokecard ">
                        <div>
                            <div className="statNameDiv">
                                <b>{ s.stat.name[0].toUpperCase() + s.stat.name.slice(1)}</b>
                            </div> 
                              <div className="statpropDiv">{s.base_stat + "/150"}</div>
                        </div>
                    <div className="progress_pokecard" style={({width:s.base_stat*1.5})}></div>
                </div>
            )}
        </div>
    </div>
    </>)
}

export default PokemonCard;