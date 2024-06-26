import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CrtitciScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CrtitciScore;
