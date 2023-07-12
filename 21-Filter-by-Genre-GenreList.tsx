import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

// "21" when we select a genre, the GenreList component should notify the App component to set the selected genre

// "21" add a prop for passing callback function
interface Props {
  onSelectGenre: (genre: Genre) => void
}
// "21" app the prop here
const GenreList = ({ onSelectGenre }: Props) => {
  // "20" loading a spinner add kro
  const { data, loading, error } = useGenres();

  if(loading) return <Spinner />;

  if(error) return null;  // return nothing in sidebar if error occurs

  return (
    <List>
      {
        data.map(genre =>
          <ListItem key={genre.id} paddingY='8px'>
            <HStack gap={3}>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
              {/* "21" replace Text with Button to FILTER */}
              {/* <Button onClick={() => console.log(genre)} fontSize='lg' variant='link'> */}
              <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )
      }
    </List>
  );
};

export default GenreList;