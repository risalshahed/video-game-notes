// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
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
                <NavBar />
            </GridItem>
            <Show above='lg'>
                {/* {1} === 4px */}
                <GridItem area='aside' paddingX={5}>
                  {/* "25" */}
                  <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                {/* "26"  */}
                <HStack spacing={5} paddingLeft={2} paddingBottom={5}>
                  <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} />
                  {/* "27" */}
                  {/* "27" Order By button a click korle sort hoileo, button er pasher title change hy na! shei jnno "sortOrder" Props pathaite hbe */}
                  <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder }) } />
                </HStack>

                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    </>
  )
}

export default App;
