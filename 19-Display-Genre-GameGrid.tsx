import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    // "18" useData er data useGames hook a niye then eikhane import kra hoice
    const { data, error, loading } = useGames();
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
                // "19" reduce the space
                spacing={4}
            >
                {
                    loading && skeletons.map(skeleton =>
                        // lecture_16 remove duplication
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardContainer>
                    )
                }
                {
                    data.map(game =>
                        // lecture_16 remove duplication
                        <GameCardContainer>
                            <GameCard key={game.id} eachGame={game} />
                        </GameCardContainer>
                    )
                }
            </SimpleGrid>
        </>
    );
};

export default GameGrid;