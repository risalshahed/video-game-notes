import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

// "32" Add Dynamic Heading
interface Props {
  gameQuery: GameQuery
}

// "32" Add Dynamic Heading
const GameHeading = ({ gameQuery }: Props) => {
  // `Platform` `Genre` Games
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;