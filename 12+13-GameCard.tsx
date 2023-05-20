import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlarformIconList from './PlarformIconList';
import CriticScore from './CriticScore';

interface Props {
    eachGame: Game
}

const GameCard = ({ eachGame }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={eachGame.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{eachGame.name}</Heading>
                {/* Lecture 12 -> 12.2 (12.1 is in useGames.ts) */}
                {/* {
                    eachGame.parent_platforms.map(
                        platform => <Text>{platform.platform.name}</Text>
                    )
                } */}
                {/* same code as above, descture the array_element of map */}
                {/* --------- npm i react-icons --------- */}
                {/* {
                    eachGame.parent_platforms.map(
                        ({platform}) => <Text>{platform.name}</Text>
                    )
                } */}

                {/* Lecture 13 */}
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