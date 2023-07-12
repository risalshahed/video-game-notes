// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

// "25" pack related variables with query object pattern
// wait! query object hoilo emn object a jei info thake ta diye we can query something
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  /* const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null) */
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
                  {/* <GenreList selectedGenre={selectedGenre} onSelectGenre={genre => setSelectedGenre(genre)} /> */}
                </GridItem>
            </Show>
            <GridItem area='main'>
                {/* "24"  */}
                {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={platform => setSelectedPlatform(platform)} /> */}
                {/* "25"  */}
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} />
                {/* "25" */}
                <GameGrid gameQuery={gameQuery} />
                {/* <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} /> */}
            </GridItem>
        </Grid>
    </>
  )
}

export default App;
