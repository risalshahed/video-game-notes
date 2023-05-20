import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

// 'Lecture_11' Game interface export krbo to use it in "GameCard.tsx"
export interface Game {
    // amra ekhn e shob variable nibo na, jokhn jeita lage seta nibo
    id: number;
    name: string;
    // 'Lecture_11' https://api.rawg.io/docs/#operation/games_list; check korle dekha jabe, we got a result prop "background_image", let's add it in the iterface
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];    // results hosse Array of objects, Game is an object (upore)
}

const useGames = () => {
    // study more/ in depth on "generic" of TS
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        // study more/ in depth on "generic" of TS
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
        // nicher line a amdr TS lagbe to define an interface that represents the shape of the response object
        .then(res => setGames(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);        
        });

        return () => controller.abort();

    }, []);

    return { games, error };
};

export default useGames;