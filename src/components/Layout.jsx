import React from 'react';
import { Flex, Box } from '@chakra-ui/react'; // Chakra UI components
import DashLeft from './DashLeft'; // Sidebar component
import BreadcrumbComponent from './Breadcrumb'; // Breadcrumb

function Layout({ children }) {
  return (
    <Flex  bg="gray.200"> {/* Flex container for horizontal layout */}
      <Box
        flex="0 0 20%" // 20% width, no flex-grow
        bg="gray.200" // Background color for the sidebar
        boxShadow="xl" // Box shadow on the right
        height="100vh" // Full height
        position="fixed" // Fixed position
      >
        <DashLeft /> {/* Sidebar content */}
      </Box>

      <Box
        ml="20%" // Move main content 20% to avoid overlap with fixed sidebar
        flex="1" // Main content area takes the rest
      >
        <BreadcrumbComponent /> {/* Breadcrumb at the top */}
        <Box p={4}> {/* Padding for main content */}
          {children} {/* Routed content goes here */}
        </Box>
      </Box>
    </Flex>
  );
}

export default Layout;
