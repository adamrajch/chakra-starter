import { Heading, Link, Container, Box } from "@chakra-ui/react";
import Header from "../components/applayout/PageHeader";
import Hero from "../components/applayout/Hero";
export default function Home() {
  return (
    <Box>
      <Header title="Welcome to my page" />

      <Hero />
    </Box>
  );
}
