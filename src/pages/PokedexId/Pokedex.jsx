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
        console.log(pokemon)
        console.log(pokemon.height)
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
                <h1 className="detailPokemonName"><b>#{pokemonId} {pokemonDetail?.name[0].toUpperCase() + pokemonDetail?.name.slice(1)}</b></h1>
                <div className="type_ability_stat_Container">
                    <div className="type_ability_container">
                        <b className="typeTitle">Type</b> 
                        <p className="types">{pokemonDetail?.types.map(t => <p className="singleType">{t.type.name[0].toUpperCase() + t.type.name.slice(1)}</p>)} </p> 
                        <b className="abilityTitle">Abilities</b>
                        <p className="abilities"> {pokemonDetail?.abilities.map(a => <p className="singleAbility">{a.ability.name[0].toUpperCase() + a.ability.name.slice(1)}</p> )} </p>
                        <p className="weightTitle">Weight</p>
                        <p className="singleWeight">{pokemonDetail?.weight}</p>
                        <p className="heightTitle">Height</p>
                        <p className="singleHeight">{pokemonDetail?.height}</p>
                    </div>
                    <div className="stats">
                        <b className="statTitle">Stats </b>
                        {pokemonDetail?.stats.map(s => 

                            <div className="progress-bar"><div><div className="statNameDiv"><b>{ s.stat.name[0].toUpperCase() + s.stat.name.slice(1)}</b></div> <div className="statpropDiv">{s.base_stat  + "/150"}</div></div>
                                <div className="progress" style={({width:s.base_stat*2})}></div>
                            </div>
                        )}
                    </div>
                        
                </div>
                    <div className="movementsContainer">
                        <b className="moveTitle">Movements </b>
                        <div className="movements">

                            {pokemonDetail?.moves.map(m => <p className="singleMove">{ m.move.name[0].toUpperCase() + m.move.name.slice(1) }</p>)}
                        </div>
                    </div>
            </div>
        </div>
    </>)
}
export default PokedexId;