import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

// "21"
interface Props {
    selectedGenre: Genre | null
}


const GameGrid = ({ selectedGenre }: Props) => {
    // "18" useData er data useGames hook a niye then eikhane import kra hoice
    // "21" useGames hook er parameter a prop pathao
    const { data, error, loading } = useGames(selectedGenre);
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
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    )
                }
                {
                    data.map(game =>
                        <GameCardContainer key={game.id}>
                            <GameCard eachGame={game} />
                        </GameCardContainer>
                    )
                }
            </SimpleGrid>
        </>
    );
};

export default GameGrid;