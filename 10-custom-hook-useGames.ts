import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

// kon variable ki type jante "docx" file check krbo
interface Game {
    // amra ekhn e shob variable nibo na, jokhn jeita lage seta nibo
    id: number;
    name: string;
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

        // ****** cancel the fetch request; what if the user navigates away from the page??? we don't wanna wait for the server to return the data and render it here, so when we fetch data in an effect, we also provide a clean up function to cancel the fetch request in case the data is no longer required
        const controller = new AbortController();
        // "AbortController" is a built-in class in modern browsers that allow us to cancel or abort asynchronous operations such as fetch request, DOM manipulation or any operation that take long time to complete

        // study more/ in depth on "generic" of TS
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
        // nicher line a amdr TS lagbe to define an interface that represents the shape of the response object
        .then(res => setGames(res.data.results))
        .catch(err => {
            // error cancel hoye gele kono error message na dekhaya e return kore felbo
            if(err instanceof CanceledError) return;
            // else (error cancel NAA hoile)
            setError(err.message);        
        });

        // return the cleanup function
        return () => controller.abort();

    }, []);

    return { games, error };
};

export default useGames;