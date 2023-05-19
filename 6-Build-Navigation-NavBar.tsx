import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
    return (
        <>
            {/* Horizontal Stack er children horizontally boshbe */}
            <HStack>
                <Image src={logo} boxSize='60px' />
                <Text>NavBar</Text>
            </HStack>
        </>
    );
};

export default NavBar;