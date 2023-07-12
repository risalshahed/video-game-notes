import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <>
            <HStack padding='10px'>
                <Image src={logo} boxSize='60px' />
                <SearchInput />
                {/* "30" go to ColorModeSwitch component to make the "dark mode" label as 'nowrap' */}
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;