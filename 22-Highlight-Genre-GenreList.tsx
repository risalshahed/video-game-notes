import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    // "22" if we render selectedGenre, font-bold otherwise normal, ei karone amra ei prop nissi
    selectedGenre: Genre | null;
}
// "22" add the selectedGenre prop here
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
              {/* "22" if we render selectedGenre, font-bold otherwise normal (sidebar er Genre bold hbe jeita selected thakbe) */}
              <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>
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