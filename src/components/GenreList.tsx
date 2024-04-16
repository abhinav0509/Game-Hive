import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getOptimisedImage from "../services/image-optimise";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="4px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getOptimisedImage(genre.image_background)}
            />
            <Button
              fontSize="md"
              variant="link"
              // onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
