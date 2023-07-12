import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
// "31"
import '../App.css';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

// "31"
interface Props {
  onSearch: (searchText: string) => void;
}

// "31"
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    // "31" search query
    <form onSubmit={e => {
      e.preventDefault();
      // "31" search input field a kisu likhe enter dle..
      if( ref.current ) onSearch(ref.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
      </InputGroup>
    </form>
  );
};

export default SearchInput;