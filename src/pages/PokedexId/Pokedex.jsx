import { useParams } from "react-router-dom";
import getPokemonById from "../../services/getPokemonById";
import { useState, useEffect } from "react";
import "./Pokedex.css";

const PokedexId = () =>{
    const {pokemonId} = useParams()
    const [pokemonDetail, setPokemonDetail] = useState(null);

    const getPokemon = async() =>{
        const pokemon = await getPokemonById(pokemonId)
        setPokemonDetail(pokemon)
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
        getPokemon()
    },[])
    return(
    <>
        <div className="pokedexIDcard">
            <div className="imgCotainer">
                <img src={getPokemonImg(pokemonDetail?.sprites)} alt="" />
            </div>
            <div className="allInfoContainer">
                <h1><b>#{pokemonId} {pokemonDetail?.name[0].toUpperCase() + pokemonDetail?.name.slice(1)}</b></h1>
                <p className="types"><b className="typeTitle">Type:</b> {pokemonDetail?.types.map(t => <p className="singleType">{t.type.name}</p>)} </p> 
                <p className="abilities"><b className="abilityTitle">Abilities:</b> {pokemonDetail?.abilities.map(a => <p className="singleAbility">{a.ability.name}</p> )} </p>
                <p className="stats"><b className="statTitle">Stats: </b>{pokemonDetail?.stats.map(s => <p className="singleStat">{ s.stat.name + " : " + s.base_stat} </p>)}</p>
                <p className="movements"><b className="moveTitle">Movements: </b>{pokemonDetail?.moves.map(m => <p className="singleMove">{ m.move.name + " "}</p>)}</p>
            </div>
        </div>
    </>)
}
export default PokedexId;