import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventSession: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email address is invalid';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    else if (!/^\d+$/.test(formData.phoneNumber)) errors.phoneNumber = 'Phone Number is invalid';
    if (!formData.eventSession) errors.eventSession = 'Please select an event session';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"} p={6} border={"1px solid grey"} maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.fullName} mb={4}>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <FormErrorMessage>{errors.fullName}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.phoneNumber} mb={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.eventSession} mb={4}>
          <FormLabel>Event Sessions</FormLabel>
          <Select name="eventSession" value={formData.eventSession} onChange={handleChange}>
            <option value="">Select a session</option>
            <option value="session1">Session 1</option>
            <option value="session2">Session 2</option>
            <option value="session3">Session 3</option>
          </Select>
          {errors.eventSession && <FormErrorMessage>{errors.eventSession}</FormErrorMessage>}
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">Register</Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
