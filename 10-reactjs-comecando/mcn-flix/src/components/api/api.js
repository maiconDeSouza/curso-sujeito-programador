//https://api.themoviedb.org/3/tv/top_rated?api_key=f71564626f999dac3f2c47ee7cdaed48&language=pt-BR&page=1
import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv"
})