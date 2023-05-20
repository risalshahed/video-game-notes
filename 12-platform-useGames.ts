import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

// ****** 12.2 platrform interface (from preview subtab of network tab)
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// 'Lecture_11' Game interface export krbo to use it in "GameCard.tsx"
export interface Game {
    id: number;
    name: string;
    // 'Lecture_11' https://api.rawg.io/docs/#operation/games_list; check korle dekha jabe, we got a result prop "background_image", let's add it in the iterface
    background_image: string;
    /*
    *************** Lecture 12 ***************
    ****** 12.1 Go to "Network" Tab in Chrome Devtool -> "Preview" Sub Tab -> "results" Object
    "Results" object a, "parent_platforms" naam er ARRAY_OF_OBJECTS asey, abr ei objects er PROTI TA object a, 1ta kore "platform" property asey, JAA ACTUALLY AREKTA PLATFORM OBJECT (V. V. V. V. I.)
    */
    // "parent_platforms" is an array_of_object where each_object has a property "platform" of type Platform_Interface
    parent_platforms: { platform: Platform }[]
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    // study more/ in depth on "generic" of TS
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        // study more/ in depth on "generic" of TS
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
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