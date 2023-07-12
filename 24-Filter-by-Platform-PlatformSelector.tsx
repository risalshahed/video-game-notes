import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

// "24"
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

// "24" add the props
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if(error) return null;

    return (
        // Drpodown List
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                { selectedPlatform?.name || 'Platforms' }
            </MenuButton>
            {/* Items */}
            <MenuList>
                {
                    data.map(platform => 
                        <MenuItem
                          key={platform.id}
                          onClick={() => onSelectPlatform(platform)}
                        >
                          {platform.name}
                        </MenuItem>
                    )
                }
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;