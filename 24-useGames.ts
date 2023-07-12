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
// "24" pass selectedPlatform to the API through the "params" object; pass "selectedPlatform?.id" as dependency as well
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', { params: {
  genres: selectedGenre?.id,
  platforms: selectedPlatform?.id
}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;