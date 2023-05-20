import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlarformIconList from './PlarformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    eachGame: Game
}

const GameCard = ({ eachGame }: Props) => {
    return (
        // **** "GameCardSkeleton" er Skeleton (ONURUP/ SIMILAR) style
        <Card width='300px' borderRadius={10} overflow='hidden'>
            {/* <Image src={eachGame.background_image} /> */}
            {/* "Lecture_14" Optimized Images */}
            <Image src={ getCroppedImageUrl( eachGame.background_image ) } />
            <CardBody>
                <Heading fontSize='2xl'>{eachGame.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlarformIconList
                        platforms={eachGame.parent_platforms.map(
                            p => p.platform
                        )}
                    />
                    <CriticScore score={eachGame.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;