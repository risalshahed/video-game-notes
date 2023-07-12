import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

// lecture_16
interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {

    return (
        // lecture_16 remove duplication
        <Box width='300px' borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    );
};

export default GameCardContainer;