import { axiosInstance } from "../api/axiosInstance"

const getAllPokemons = async() => {
    try {
        const res = await axiosInstance.get('pokemon', { params: { limit: 10000 } });
        return res.data.results;
    } catch (error) {
        console.log(error)
    }
}

export default getAllPokemons;