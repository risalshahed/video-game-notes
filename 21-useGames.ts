import useData from './useData';
import { Genre } from './useGenres';

// ****** 12.2 platrform interface (from preview subtab of network tab)
export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

// "18" generic kra hoice (useData) tai lagbe na
/* interface FetchGamesResponse {
    count: number;
    results: Game[];
} */

// "21" { params: ... ... } is AxiosRequestConfig object
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id} }, [selectedGenre?.id]);

export default useGames;