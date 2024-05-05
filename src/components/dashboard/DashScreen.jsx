import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import Profile from "../profile/Profile";
import portrait from "../../assets/imgs/portrait.avif";
import { Link } from "react-router-dom";

function DashScreen() {
  return (
    <Flex justify='space-between'>
      <Box width='45%' bg='#fff' p={8} mr={4}>
        <Flex direction='column'>
          <Flex justify='space-between' mb={4}>
            <Heading size='md'>Sales</Heading>
            <Text>Active</Text>
          </Flex>

          <Flex mb={4} justify='space-between'>
            <Heading size='sm'>Assignment Link</Heading>
            <Link
              href='https://www.assign.com'
              color='blue.500' // Chakra color system for a blue link
              isExternal // Opens in a new tab
              _hover={{ textDecoration: "underline", color: "blue.700" }} // Hover style
            >
              assign.com
            </Link>
          </Flex>

          <Flex justify='space-between'>
            <Heading size='sm'>Assignment Hour</Heading>
            <Text>3 hours</Text>
          </Flex>

          <Flex
            justify='space-between'
            mt={4} // Margin-top
          >
            <Heading size='sm'>Assignment End</Heading>
            <Text>11 March 2025</Text>
          </Flex>
        </Flex>

        <Flex justify='space-between' mt={8}>
          <Heading size='sm'>Candidate</Heading>
          <Text>Score</Text>
        </Flex>
      </Box>

      <Box
        width='45%' // Equivalent to width: 100%
        bg='#fff'
        p={4} // Padding
      >
        <Box mb={4}>
          {" "}
          {/* Content section with flex */}
          <Profile /> {/* Profile component */}
          <Heading size='sm' mt={4}>
            About
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet.
          </Text>
        </Box>
      </Box>
      <Box className='video'>
        {" "}
        {/* Video section */}
        <Image src={portrait} boxSize='400px' />
      </Box>
    </Flex>
  );
}

export default DashScreen;
