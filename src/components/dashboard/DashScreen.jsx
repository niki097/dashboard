import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import Profile from '../profile/Profile';
import portrait from '../../assets/imgs/portrait.avif';

function DashScreen() {
  return (
    <Flex justify="space-between"> {/* Replaces dash-container */}
      <Box
        width="45%" // Similar to width: 100%
        bg="#fff"
        p={8} // Padding, equivalent to 2rem
        mr={4} // Margin, equivalent to 1rem
      >
        <Flex direction="column"> {/* Replaces dashboard-left */}
          <Flex justify="space-between" mb={4}> {/* sales-f */}
            <Heading size="md">Sales</Heading>
            <Text>Active</Text>
          </Flex>

          <Box mb={4}> {/* Section with flex-start alignment */}
            <Heading size="sm">Assignment Link</Heading>
            <Text>assign.com</Text>
          </Box>

          <Box> {/* Example of additional section */}
            <Heading size="sm">Assignment Hour</Heading>
            <Text>3 hours</Text>
          </Box>

          <Flex
            justify="space-between"
            mt={4} // Margin-top
          >
            <Heading size="sm">Assignment End</Heading>
            <Text>11 March 2025</Text>
          </Flex>
        </Flex>

        <Flex justify="space-between" mt={8}> {/* Similar to condidate-score */}
          <Heading size="sm">Candidate</Heading>
          <Text>Score</Text>
        </Flex>
      </Box>

      <Box
        width="45%" // Equivalent to width: 100%
        bg="#fff"
        p={4} // Padding
      >
        <Box mb={4}> {/* Content section with flex */}
          <Profile /> {/* Profile component */}
          <Heading size="sm" mt={4}>About</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
          </Text>
        </Box>

       
      </Box>
      <Box className="video"> {/* Video section */}
          <Image
            src={portrait}
            boxSize="400px"
          />
        </Box>
    </Flex>
  );
}

export default DashScreen;
