import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if(loading) return <Spinner />;

  if(error) return null;  // return nothing in sidebar if error occurs

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>

      <List>
        {
          data.map(genre =>
            <ListItem key={genre.id} paddingY='8px'>
              <HStack gap={3}>
                <Image
                  boxSize='32px'
                  borderRadius={8}
                  // "33" the genre images look nicer with 'cover' object
                  objectFit='cover'
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  // "33" clean up the genre text in sidebar
                  whiteSpace='normal' textAlign='left'
                  fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                  onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
        }
      </List>
    </>
  );
};

export default GenreList;