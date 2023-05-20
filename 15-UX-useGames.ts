import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

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

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    // study more/ in depth on "generic" of TS
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    // "lecture_15" 15.1 track loading state
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        // "lecture_15" 15.2 just before calling API, set the loading true
        setLoading(true);
        // call API
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
        .then(res => {
            setGames(res.data.results);
            // 15.3 emnite finally te false krleo, TS ba strict mode a possible na tai ekhanei
            setLoading(false);
        })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            // 15.4 emnite finally te false krleo, TS ba strict mode a possible na tai ekhanei
            setLoading(false);
        });

        return () => controller.abort();

    }, []);

    // 15.5 return the loading value as well
    return { games, error, loading };
};

export default useGames;