import { useEffect, useState } from "react";
import "./Search.css";
import { Form } from "react-router-dom";
import getAllTypes from "../../services/getAllTypes";

const SearchByName = ({nameInitial, typeInitial}) =>{
    const [pokemonName, setPokemonName] = useState(nameInitial);
    const [nameError, setNameError] = useState("");
    const [types, setTypes] = useState([])
    const [selectTypeValue, setSelectTypeValue] = useState(typeInitial)

    const handleChange = (e) =>{
        let name = e.target.value;
        console.log(name)
        if(!name){ 
            setNameError("the name is empty");
            name=""
        }else setNameError("")
        setPokemonName(name)
    }

    const loadPokemonTypes = async () =>{
        const types = await getAllTypes();
        setTypes(types)
    }

    const typeHandleChange = (e) =>{
        setSelectTypeValue(e.target.value)
    }

    useEffect(()=>{
        loadPokemonTypes()
    },[])
    useEffect(()=>{
        setPokemonName(nameInitial)
    },[nameInitial])
    useEffect(()=>{
        setSelectTypeValue(typeInitial)
    },[typeInitial])
    return(
    <>
        <div className="searchForm">
            <Form>
                <p className="searchError">{nameError}</p>
                <div className="insideFormPokedex">
                    <input type="text" name="pokemonName" value={pokemonName} onChange={handleChange} placeholder="Search by name or id"/>
                    
                    <select className="pokemonType" name="pokemonType" value={selectTypeValue} onChange={typeHandleChange}>
                        <option value="">All Types</option>
                        {types.map(t =>
                            <option key={t.id} value={t.id}>{t.name}</option>
                        )}
                    </select>
                    
                    <button >Search</button>
                </div>


            </Form>
        </div>
    </>)
}
export default SearchByName;