import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa';      // fa -> font awesome

import { MdPhoneIphone } from 'react-icons/md';      // md -> material design
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';      // bs -> bootstrap
import { IconType } from 'react-icons/lib/esm/iconBase';

interface Props {
    platforms: Platform[]
}

const PlarformIconList = ({ platforms }: Props) => {
    // emne square bracket diye type dewa k "index_signature" bole
    // it means, "iconMap" Object has any number of keys with string type, we don't care about the names!
    // and each key is mapped to the value of the IconType (defined it react icons library)
    const iconMap: { [key: string]: IconType } = {
        /* name: PlayStation
        slug (key): playstation */
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={2.5}>  {/* {1} === '4px' */}
            {
                platforms.map(platform => 
                    // <Text>{platform.name}</Text>
                    <Icon as={iconMap[platform.slug]} color='gray.500' />
                )
            }
        </HStack>
    );
};

export default PlarformIconList;