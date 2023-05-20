import { HStack, Text, useColorMode, Switch } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <>
            {/* The Switch component is used as an alternative for the checkbox component. */}
            <HStack>
                <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                <Text>Dark Mode</Text>
            </HStack> 
        </>
    );
};

export default ColorModeSwitch;