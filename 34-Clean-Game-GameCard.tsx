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
        <Card>
            <Image src={ getCroppedImageUrl( eachGame.background_image ) } />
            <CardBody>
                {/* "34" clean game */}
                <HStack marginBottom={3} justifyContent='space-between'>
                    <PlarformIconList
                        platforms={eachGame.parent_platforms.map(
                          p => p.platform
                        )}
                    />
                    <CriticScore score={eachGame.metacritic} />
                </HStack>
                {/* "34" Heading k niche ana hoilo */}
                <Heading fontSize='2xl'>{eachGame.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;