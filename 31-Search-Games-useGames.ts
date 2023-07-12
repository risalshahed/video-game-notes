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
      ordering: gameQuery.sortOrder,
      // "31" search er smy new query
      search: gameQuery.searchText
    }
  }, [gameQuery]
);

export default useGames;