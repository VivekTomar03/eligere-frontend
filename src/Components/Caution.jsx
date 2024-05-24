// src/pages/Caution.jsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Link, Button, useColorModeValue } from "@chakra-ui/react";
import "../App.css"
import { useNavigate } from "react-router-dom";
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);

const Caution = () => {
    const navigate = useNavigate()
    const buttonBgColor = useColorModeValue("blue.400", "blue.200");
    const buttonHoverColor = useColorModeValue("blue.500", "blue.300");
  return (
    <MotionBox
      p={8}
      mt={6}
      maxW="800px"
      mx="auto"
      bg="white"
      color="gray.800"
      borderRadius="md"
      boxShadow="lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading mb={4} color={"red"} fontSize="3xl">Caution</Heading>
      <Text fontSize="xl" mb={6}>
        Please note that the server may take some time to respond. This could be due to various reasons such as server load, network issues, or deployment processes.
      </Text>
      <Text fontSize="xl" mb={6}>
        If you encounter any issues or have any questions, feel free to contact us at <Link href="tonarvivek90viv@gmail.com" color="blue.400">info@example.com</Link>.
      </Text>
      <Text fontSize="xl" mb={6}>
        Thank you for your understanding and patience.
      </Text>
      <MotionButton
      colorScheme="blue"
      whileHover={{ scale: 1.1, rotateY: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      bg={buttonBgColor}
      _hover={{ bg: buttonHoverColor }}
      _active={{ bg: buttonHoverColor }}
        onClick={() =>navigate('/')}
      >
       <MotionText
        whileHover={{ scale: 1.1, rotateY: 180 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
       > Go Back</MotionText>
      </MotionButton>
    </MotionBox>
   
  );
};

export default Caution;
