import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {
                error && <Text>{error}</Text>
            }
            {/* In Chakra, xl >= 1280px; lg >=992px; md >= 768px */}
            {/* spacing -> 10px */}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding='10px'
                spacing={10}
            >
                {
                    games.map(game =>
                        // <li key={game.id}>{game.name}</li>
                        <GameCard key={game.id} eachGame={game} />
                    )
                }
            </SimpleGrid>
        </>
    );
};

export default GameGrid;