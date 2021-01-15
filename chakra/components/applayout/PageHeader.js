import { Heading } from "@chakra-ui/react";

export default function Header({ title }) {
  return (
    <Heading
      as="h1"
      fontSize={["24px", "36px", "44px"]}
      mb="2"
      isTruncated
      textAlign="center"
    >
      {title}
    </Heading>
  );
}
