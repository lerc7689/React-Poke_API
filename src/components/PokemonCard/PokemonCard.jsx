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
        <h2 className="title"  id={pokemon?.id}>{pokemon?.name}</h2>
        <div className="image_container">
            <img className="frontimg"src={getPokemonImg(pokemon?.sprites)} alt="" id={pokemon?.id}/>
            <img className="backimg" src={backpokeball} alt="" id={pokemon?.id}/>
        </div>
        <div className="types_container" id={pokemon?.id}>
            <p id={pokemon?.id}><b id={pokemon?.id}>Type: </b></p>
            {pokemon?.types.map(t =>
            <p key={t.type.name} id={pokemon?.id}>{t.type.name} /</p>)}
        </div>
        <div className="stats_container" id={pokemon?.id}>
            {pokemon?.stats.map(t =>
            <p key={t.stat.name} id={pokemon?.id}><b id={pokemon?.id}>{t.stat.name}</b> : {t.base_stat}</p>)}
        </div>
    </div>
    </>)
}

export default PokemonCard;