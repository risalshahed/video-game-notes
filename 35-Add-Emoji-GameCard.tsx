import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlarformIconList from './PlarformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
    eachGame: Game
}

const GameCard = ({ eachGame }: Props) => {
    return (
        <Card>
            <Image src={ getCroppedImageUrl( eachGame.background_image ) } />
            <CardBody>
                <HStack marginBottom={3} justifyContent='space-between'>
                    <PlarformIconList
                        platforms={eachGame.parent_platforms.map(
                          p => p.platform
                        )}
                    />
                    <CriticScore score={eachGame.metacritic} />
                </HStack>
                {/* "35" Add Emoji */}
                <Heading fontSize='2xl'>
                  {eachGame.name}<Emoji rating={eachGame.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;