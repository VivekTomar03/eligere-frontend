import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const MotionCard = motion(Card);

const Allguest = () => {
  const [data, setData] = useState([]);
const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    setisLoading(true)
    axios
      .get("https://backend-eligere.onrender.com/user")
      .then((res) => {
        setData(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        setisLoading(false)
        console.log(err);
      });
  }, []);
if(isLoading){
  return <Loader />
}
  return (
    <SimpleGrid p={4} mt={2} columns={[1, 2, 3]} spacing={6}>
      {data.map((el) => (
        <MotionCard
          key={el._id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
          borderRadius="md"
        >
          <CardHeader bg="teal.500" color="white" py={2} borderTopRadius="md">
            <Heading size="md" display="flex" alignItems="center">
              Unique ID {el._id.substr(15, 30)}{" "}
              <Box mt={"5px"} ml={1}>
                *****
              </Box>
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Details:
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>Email:</span> {el.email}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>Phone Number:</span>{" "}
              {el.phoneNumber}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>Event Session:</span>{" "}
              {el.eventSession}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>
                Unique ID already sent to all users on their mail
              </span>
            </Text>
          </CardBody>
        </MotionCard>
      ))}
    </SimpleGrid>
  );
};

export default Allguest;
