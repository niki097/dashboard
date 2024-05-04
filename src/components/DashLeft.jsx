import React from 'react';
import { Box,VStack, Heading, Text, Input, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function DashLeft() {
    const handleFileSelect = () => {
    // Implement file selection logic here
    console.log('File selected');
  };
  return (
    <Box
      w="200px" // Sidebar width
      height="100vh" // Full height of the viewport
      bg="gray.200" // Background color
      boxShadow="2xl" // Right-side box shadow
      position="fixed" // Fixes the sidebar in place
    >
      <VStack align="stretch" p={4}> {/* Stack elements vertically */}
        <Text fontSize="lg">Hii, AltWorld</Text> {/* Greeting */}
        {/* Add additional content or links as needed */}
      </VStack>
      <Box borderWidth="1px" borderRadius="lg" p="4">
      <IconButton
        aria-label="Add file"
        icon={<AddIcon />}
        onClick={handleFileSelect}
        mb="2"
      />
      <Heading as="h2" size="md" mb="2">
        Card Title
      </Heading>
      <Text>
        Some information goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Input type="file" accept="image/*,.pdf,.doc,.docx" mt="4" />
    </Box>
    </Box>
  );
}

export default DashLeft;
