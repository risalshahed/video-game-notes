import { GameQuery } from '../App';
import useData from './useData';

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

const useGames = (
  gameQuery: GameQuery
) => useData<Game>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      // "27" while calling the server, we should add a new query parameter
      ordering: gameQuery.sortOrder
    }
    // "27" query Object or parameter er khetre alada alada dependency dewar dorkar nai, ekbare relative values query object (gameQuery) er mddhe encapsulate kore oita dependency dlei hye jaay
  }, [gameQuery]
);

export default useGames;