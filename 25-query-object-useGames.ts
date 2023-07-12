import { GameQuery } from '../App';
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

// "24" pass selectedPlatform to the API through the "params" object; pass "selectedPlatform?.id" as dependency as well
const useGames = (
  /* selectedGenre: Genre | null,
  selectedPlatform: Platform | null */
  // "25"
  gameQuery: GameQuery
) => useData<Game>('/games', { params: {
  // "25" ****** "params" object is the only place where we use genre & platform individually
  genres: gameQuery.genre?.id,
  platforms: gameQuery.platform?.id
  /* genres: selectedGenre?.id,
  platforms: selectedPlatform?.id */
// }}, [selectedGenre?.id, selectedPlatform?.id]);
// "25" query Object or parameter er khetre alada alada dependency dewar dorkar nai, ekbare relative values query object (gameQuery) er mddhe encapsulate kore oita dependency dlei hye jaay
}}, [gameQuery]);

export default useGames;