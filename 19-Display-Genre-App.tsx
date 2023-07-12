// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {

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
                {/* "19" set horizontal-padding for sidebar */}
                <GridItem area='aside' paddingX={5}>
                  <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <GameGrid />
            </GridItem>
        </Grid>
    </>
  )
}

export default App;
