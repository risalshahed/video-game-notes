import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react'

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

const GameGrid = () => {
    // study more/ in depth on "generic" of TS
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // study more/ in depth on "generic" of TS
        apiClient.get<FetchGamesResponse>('/games')
        // nicher line a amdr TS lagbe to define an interface that represents the shape of the response object
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    }, []);

    return (
        <>
            {
                error && <Text>{error}</Text>
            }
            <ul>
                {
                    games.map(game =>
                        <li key={game.id}>{game.name}</li>
                    )
                }
            </ul>
        </>
    );
};

export default GameGrid;