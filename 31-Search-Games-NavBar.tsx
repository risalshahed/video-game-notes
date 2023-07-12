import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

// "31"
interface Props {
  onSearch: (searchText: string) => void;
}

// "31"
const NavBar = ({ onSearch }: Props) => {
    return (
        <>
            <HStack padding='10px'>
                <Image src={logo} boxSize='60px' />
                {/* "31" */}
                <SearchInput onSearch={onSearch} />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;