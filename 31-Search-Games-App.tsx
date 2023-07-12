// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;  
  sortOrder: string;    // "27"
  searchText: string;   // "31"
}

function App() {
  // "25"
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      {/* <Button colorScheme='blue'>Button</Button> */}
        <Grid templateAreas={{
            base: `'nav' 'main'`,
            lg: `'nav nav' 'aside main'`,   // lg > 1024px
          }}
          // "19"
          templateColumns = {{
            base: '1fr',  // 1fr -> all available space
            lg: '200px 1fr'
          }}
          >
            <GridItem area='nav'>
                {/* "31" */}
                <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
            </GridItem>
            <Show above='lg'>
                {/* {1} === 4px */}
                <GridItem area='aside' paddingX={5}>
                  <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                {/* "29" console a error thake, so use 'Flex' instead of HStack */}
                <Flex paddingLeft={2} paddingBottom={5}>
                  <Box marginRight={5}>
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} />
                  </Box>
                  <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder }) } />
                </Flex>

                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    </>
  )
}

export default App;
