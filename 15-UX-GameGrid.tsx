import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    // const { games, error } = useGames();
    // "Lecture_15" 15.7 loading aano
    const { games, error, loading } = useGames();
    // 15.8 "skeletons" time er sathe change hbe NAA so no need of useState
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            {
                error && <Text>{error}</Text>
            }
            {/* In Chakra, xl >= 1280px; lg >=992px; md >= 768px */}
            {/* spacing -> 10px */}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                padding='10px'
                spacing={10}
            >
                {/* 15.9 */}
                {
                    loading && skeletons.map(skeleton =>
                        <GameCardSkeleton key={skeleton} />    
                    )
                }
                {
                    games.map(game =>
                        <GameCard key={game.id} eachGame={game} />
                    )
                }
            </SimpleGrid>
        </>
    );
};

export default GameGrid;