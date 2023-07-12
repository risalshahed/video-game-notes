import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

// 27 when we select the 'Order By' button, it should notify the "App" component
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;    // to display label in 'Ordey' button dynamically
}

// "27" ****** ordering: Available fields: name, released, added, created, updated, rating, metacritic. You can "reverse the sort order adding a hyphen", for example: -released. source: "https://api.rawg.io/docs/#operation/games_list"

// "27" parameter 'onSelectSortOrder'
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  // "-" (hyphen) dle reverse sort
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Released date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  // "27"to display label in 'Ordey' button dynamically
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
      // Drpodown List
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
              {/* to display label in 'Ordey' button dynamically */}
              Order By: { currentSortOrder?.label || 'Relevance' }
          </MenuButton>
          {/* Items */}
          <MenuList>
              {/* 27 */}
              {
                sortOrders.map(order =>
                  <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                    {order.label}
                  </MenuItem>
                )
              }
          </MenuList>
      </Menu>
  );
};

export default SortSelector;