// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
  // "21" pass data between genre's list & games' components
  // eikhan theke selectedGenre 'App' component k janabe konta select kra hoice
  // "21"  when we select a genre, the GenreList component should notify the App component to set the selected genre
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  // "24" kon platform select krbo ta track krbo
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
                  {/* "22" pass the selectedGenre prop to the "GenreList" component */}
                  <GenreList selectedGenre={selectedGenre} onSelectGenre={genre => setSelectedGenre(genre)} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                {/* "24" ei Prop dewar sathei UI te render hbena, BUT browser a giye inspect kore, components a giye react er devtool er "App" component a click korle, pashe "hooks" er mddhe "state" dekha jabe, oikhane click korle amdr selected platform dekha jabe, joss! */}
                {/* "24"  */}
                <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={platform => setSelectedPlatform(platform)} />
                {/* "23" */}
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
            </GridItem>
        </Grid>
    </>
  )
}

export default App;
