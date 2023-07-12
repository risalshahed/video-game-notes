import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

// "26" this full component is 26th Lecture
const SortSelector = () => {
  return (
      // Drpodown List
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
              Order By: Relevance
          </MenuButton>
          {/* Items */}
          <MenuList>
              {/* 26 */}
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Date Added</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Release Date</MenuItem>
              <MenuItem>Popularity</MenuItem>
              <MenuItem>Average Rating</MenuItem>
          </MenuList>
      </Menu>
  );
};

export default SortSelector;