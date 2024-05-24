import { useState } from "react";
import { Box, Container, useToast } from "@chakra-ui/react";
import ConfirmationPage from "./Components/ConfirmationPage";
import RegistrationForm from "./Components/RegistrationForm";

const App = () => {
  const [registrationData, setRegistrationData] = useState(null);
  const toast = useToast();
  const handleFormSubmit = (data) => {
    fetch("https://backend-eligere.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          console.error(data.errors);
          toast({
            title: data.errors,
            position: "bottom",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        } else {
          setRegistrationData(data);
          toast({
            title: data.message,
            position: "bottom",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: error,
          position: "bottom",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  return (
    <Container bg={"white"} >
      <Box py={5}>
        {registrationData ? (
          <ConfirmationPage setRegistrationData={setRegistrationData} registrationData={registrationData} />
        ) : (
          <RegistrationForm onSubmit={handleFormSubmit} />
        )}
      </Box>
    </Container>
  );
};

export default App;
