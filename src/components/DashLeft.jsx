import React, { useRef } from 'react';
import { Box, VStack, Heading, Text, IconButton } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa6';

function DashLeft() {

  const fileInputRef = useRef(null);

  // Function to trigger the file input click
  const handlePlusClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 0) {
      console.log('File selected:', selectedFiles[0]);
    }
  };

  return (
    <Box
      w={["100%", "250px"]} 
      height="100vh" 
      bg="gray.200" 
      boxShadow="2xl" 
      position="fixed" 
    >
      <VStack align="stretch" p={4}>
        <Text fontSize="lg">Hi, AltWorld</Text> {/* Greeting */}
      </VStack>

      <Box
        bg="purple.500" 
        borderWidth="1px"
        borderRadius="lg" 
        p="4"
        mt='8'
        textAlign='center'
        color="white" 
      >
        <IconButton
          aria-label="Add file"
          icon={<FaPlus />}
          onClick={handlePlusClick} 
          mb="2"
          bg="purple.300" 
          color="white" 
          _hover={{ bg: "purple.400" }} 
        />
        <Heading as="h2" size="md" mb="2">
          Card Title
        </Heading>
        <Text>
          Some information goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <input
          type="file"
          ref={fileInputRef} 
          style={{ display: "none" }} 
          onChange={handleFileChange} 
          accept="image/*,.pdf,.doc,.docx" 
        />
      </Box>
    </Box>
  );
}

export default DashLeft;
