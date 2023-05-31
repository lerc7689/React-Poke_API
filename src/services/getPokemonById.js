import { axiosInstance } from "../api/axiosInstance"

const getPokemonById = async(id) => {
    try {
        const res = await axiosInstance(`pokemon/${id}/`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export default getPokemonById;