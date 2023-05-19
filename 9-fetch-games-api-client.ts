import axios from "axios";

export default axios.create({
    // https://api.rawg.io/api/games
    baseURL: 'https://api.rawg.io/api',     // remove "/games"
    params: {
        key: '78fd302d35e4444ea7885a5e030bc455'
    }
})