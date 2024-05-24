
import { Box, Button, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
const navigate = useNavigate()
const registrationData =JSON.parse( localStorage.getItem("eventuser"))


  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"} p={6} border={"1px solid grey"} maxW="md" mx="auto" mt={5} textAlign="left">
      <Heading as="h1" size="md" mb={4}>Registration Confirmation</Heading>
      <Text mb={2}>Thank you for registering!</Text>
      <Text mb={4}>Registration ID: <strong>{registrationData.token}</strong></Text>
      <List spacing={2}>
        <ListItem><strong>Full Name:</strong> {registrationData.data.fullName}</ListItem>
        <ListItem><strong>Email:</strong> {registrationData.data.email}</ListItem>
        <ListItem><strong>Phone Number:</strong> {registrationData.data.phoneNumber}</ListItem>
        <ListItem><strong>Event Session:</strong> {registrationData.data.eventSession}</ListItem>
      </List>
      <Button mt={2}  onClick={() => {

        localStorage.removeItem("eventuser")
        navigate("/")
      }} colorScheme="teal" width="full">New Registration</Button>

    </Box>
  );
};

export default ConfirmationPage;
