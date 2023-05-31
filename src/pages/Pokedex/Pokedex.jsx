import "./Pokedex.css"
import { useContext } from "react";
import { userNameContext } from "../../context/UserNameContext";
import { useState } from "react";
import { Link, useLoaderData, } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {usePagination} from "../../hooks/usePagination";
import Pagination from "../../components/pagination/Pagination"
import SearchByName from "../../components/Search/Search";
import SettingsModalComp from "../../components/SettingsModal/SettingsModal";

const Pokedex = () =>{
    const {userName} = useContext(userNameContext);
    const [quatityPagination, setQuatityPagination] = useState(20)
    const { pokemons, pokemonName, pokemonTypeId } = useLoaderData()
    const [pageNumber, listSlice, pages, changePageTo] = usePagination(pokemons, quatityPagination)

    return(
    <>
        <SettingsModalComp setQuatityPagination={setQuatityPagination} />

        <p className="trainerMessage"> <em className="trainerMessage_userName">Welcome {userName},</em> here you can find your favorite pokemon</p>
        
        <SearchByName nameInitial={pokemonName} typeInitial={pokemonTypeId} />

        <Pagination 
            pages ={pages} 
            changePageTo={changePageTo} 
            pageNumber={pageNumber} 
            setQuatityPagination={setQuatityPagination}
        />
              
        <div className="pokemonList">
        {listSlice && (
            listSlice.map(pokemon =>
                <Link style={{color: "unset", textDecoration: "unset"}}
                to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
                <PokemonCard key={pokemon.url} pokemonID={pokemon.url.split("/").at(-2)}/>
                </Link>
            )
        )}
        </div> 

        <Pagination 
            pages ={pages} 
            changePageTo={changePageTo} 
            pageNumber={pageNumber} 
            setQuatityPagination={setQuatityPagination}
        />  
    </>
    )
}

export default Pokedex;