import { Container, VStack, Input, SimpleGrid, Box, Heading, Image, Text } from "@chakra-ui/react";

const Index = () => {
  const doors = [
    { id: 1, name: "Victorian Door", image: "door1.jpg" },
    { id: 2, name: "Modern Door", image: "door2.jpg" },
    { id: 3, name: "Classic Door", image: "door3.jpg" },
    { id: 4, name: "Rustic Door", image: "door4.jpg" },
    // Add more door objects as needed
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Architectural Parts Broker
        </Heading>
        <Input
          placeholder="Search for doors..."
          size="lg"
          variant="filled"
          mb={8}
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {doors.map((door) => (
            <Box key={door.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={door.image} alt={door.name} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="xl">
                  {door.name}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;