import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props {
    eachGame: Game
}

const GameCard = ({ eachGame }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={eachGame.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{eachGame.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;