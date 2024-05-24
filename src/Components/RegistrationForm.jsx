import { useState } from 'react';
import { motion } from "framer-motion";
import { Box, FormControl, FormLabel, Input, FormErrorMessage, Select, Button, useToast } from "@chakra-ui/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionInput = motion(Input);
const MotionButton = motion(Button);

const RegistrationForm = () => {

  const [data , setData ] = useState([])
  const toast = useToast()
  const navigate = useNavigate()
  const [isLoading , setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventSession: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      errors.fullName = 'Full Name must only contain letters and spaces';
    }
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email address is invalid';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    else if (!/^\d+$/.test(formData.phoneNumber)) errors.phoneNumber = 'Phone Number is invalid';
    else if(formData.phoneNumber.length<10) errors.phoneNumber = 'Phone Number is invalid';
    if (!formData.eventSession) errors.eventSession = 'Please select an event session';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setLoading(true)
     axios.post("https://backend-eligere.onrender.com/user/register", formData)
     .then((res) => {
      console.log(res.data)
      setData(res?.data)
      setLoading(false)
      navigate("/confirm")
      localStorage.setItem("eventuser", JSON.stringify(res?.data))
      toast({
        title: res?.data?.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
     })
     setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      eventSession: '',
     })
    } else {
      setLoading(false)
      setErrors(errors);
      toast({
        title: errors?.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  };

  return (
  <>
  <MotionBox
      bg="white"
      p={6}
      border="1px solid grey"
      maxW="md"
      mx="auto"
      mt={5}
      borderRadius="md"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.fullName} mb={4}>
          <FormLabel color="black">Full Name</FormLabel>
          <MotionInput
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            color="black"
            border="1px solid grey"
            _focus={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px teal.400"
            }}
          />
          {errors.fullName && <FormErrorMessage>{errors.fullName}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel color="black">Email Address</FormLabel>
          <MotionInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            color="black"
            border="1px solid grey"
            _focus={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px teal.400"
            }}
          />
          {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.phoneNumber} mb={4}>
          <FormLabel color="black">Phone Number</FormLabel>
          <MotionInput
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            color="black"
            border="1px solid grey"
            _focus={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px teal.400"
            }}
          />
          {errors.phoneNumber && <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.eventSession} mb={4}>
          <FormLabel color="black">Event Sessions</FormLabel>
          <Select
            name="eventSession"
            value={formData.eventSession}
            onChange={handleChange}
            color="black"
            border="1px solid grey"
            styles={{
              menu: {
                bg: "white",
                color: "black",
              },
              option: {
                bg: "white",
                color: "black",
              },
            }}
            _focus={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px teal.400",
            }}
          >
            <option color='white' value="">Select an Event</option>
            <option value="Harmony-Fest">Harmony Fest</option>
            <option value="Melody-Mania">Melody Mania</option>
            <option value="Rhythm Revelry">Rhythm Revelry</option>
          </Select>
          {errors.eventSession && <FormErrorMessage>{errors.eventSession}</FormErrorMessage>}
        </FormControl>
        <MotionButton
          isLoading={isLoading}
          type="submit"
          colorScheme="teal"
          width="full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Register
        </MotionButton>
      </form>
    </MotionBox>
    
   
  </>
  );
};

export default RegistrationForm;
