// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {

  return (
    <>
        {/* <Button colorScheme='blue'>Button</Button> */}
        <Grid templateAreas={{
            base: `'nav' 'main'`,
            lg: `'nav nav' 'aside main'`,   // lg > 1024px
            }}>
            <GridItem area='nav' bg='hotpink'>Nav</GridItem>
            {/* aside sudhu lg (>1024px) device a show krbe */}
            <Show above='lg'>
                <GridItem area='aside' bg='orange'>Aside</GridItem>
            </Show>
            <GridItem area='main' bg='coral'>Main</GridItem>
        </Grid>
    </>
  )
}

export default App;