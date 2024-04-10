import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimisedImage from "../services/image-optimise";
const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="4px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getOptimisedImage(genre.image_background)}
            />
            <Text fontSize="md">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
