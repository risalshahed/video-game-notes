import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
// import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

// "21"
interface Props {
  gameQuery: GameQuery;     // "25"
  // "25"
  /* selectedGenre: Genre | null;
  selectedPlatform: Platform | null;   // "24" */
}

// **** selectedGenre/ selectedPlatform amdr Grid a dekhaite hoile obossoi GameGrid component er props a eguloa pass krte hbe
// "24"
// const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  // const { data, error, loading } = useGames(selectedGenre, selectedPlatform);
// "25"
const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, loading } = useGames(gameQuery);
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