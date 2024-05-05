import React from 'react';
import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import DashLeft from './DashLeft';
import BreadcrumbComponent from './Breadcrumb';

function Layout({ children }) {
  const sidebarWidth = useBreakpointValue({
    base: "60px", // On mobile, a smaller sidebar
    md: "15%", // On medium screens, sidebar takes 15% width
    lg: "18%", // On large screens, 18% width
  });

  const contentMargin = useBreakpointValue({
    base: "60px", // Space from the sidebar for smaller screens
    md: "15%", // Adjust margin for medium screens
    lg: "18%", // Adjust margin for large screens
  });

  return (
    <Flex bg="gray.200">
      <Box
        flex="0 0 auto" // Sidebar has a fixed width
        width={sidebarWidth} // Responsive width
        bg="gray.200"
        boxShadow="xl"
        height="100vh"
        position="fixed"
      >
        <DashLeft />
      </Box>

      <Box
        ml={contentMargin} // Adjust margin based on screen size
        flex="1" // Main content takes remaining space
        pt="2%"
        pl="3%"
      >
        <BreadcrumbComponent />
        <Box p={4}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
}

export default Layout;
