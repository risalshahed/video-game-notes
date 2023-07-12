import { HStack, Text, useColorMode, Switch } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <>
            <HStack>
                <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                {/* "30" nowrap krbo */}
                <Text whiteSpace={'nowrap'}>Dark Mode</Text>
            </HStack>
        </>
    );
};

export default ColorModeSwitch;