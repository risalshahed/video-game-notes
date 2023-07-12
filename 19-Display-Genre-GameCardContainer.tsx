import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

// lecture_16
interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {

    return (
        // "19" remove the fixed width
        // <Box width='300px' borderRadius={10} overflow='hidden'>
        <Box borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    );
};

export default GameCardContainer;