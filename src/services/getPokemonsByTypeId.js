import { axiosInstance } from "../api/axiosInstance"

const getPokemonsByTypeId = async(typeId) => {
    try {
        const res = await axiosInstance(`type/${typeId}/`);
        return res.data.pokemon.map(pokemonData => pokemonData.pokemon);
    } catch (error) {
        console.log(error)
    }
}

export default getPokemonsByTypeId;