import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react'; // Import Chakra UI components

function DashLeft() {
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
    </Box>
  );
}

export default DashLeft;
