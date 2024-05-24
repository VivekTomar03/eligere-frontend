import React from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { MdHome, MdSearch, MdPerson, MdShoppingCart } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAlertFill } from "react-icons/ri";
import "../App.css"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <Box className='button-container' width={"100%"} display="flex" gap="4">
      <Button onClick={()=> navigate("/")}  className='button' bg={"transparent"}>
        <Icon className='icon' as={AiFillHome} w={6} h={6} />
      </Button>
      <Button onClick={()=> navigate("/caution")} bg={"transparent"} className='button'>
        <Icon className='icon' as={RiAlertFill} w={6} h={6} />
      </Button>
      <Button onClick={()=> navigate("/guest")} bg={"transparent"} className='button'>
        <Icon className='icon' as={MdPerson} w={6} h={6} />
      </Button >
      
    </Box>
  );
};

export default Navbar;
