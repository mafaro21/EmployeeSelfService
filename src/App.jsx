import { React, useState, useEffect } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Loader from './components/Loader'

function App() {
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const Employee = useSelector((state) => state.auth.employee);

  const toPascalCase = (str) =>
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join(" ");

  useEffect(() => {
    document.title = 'Homepage'
    if (isLogged) {
      setName(toPascalCase(Employee.first_name));
    } else {
      return null;
    }

    currentTime();

    console.log(Employee.first_name)
  }, []);

  const currentTime = () => {
    const date = new Date();
    const showTime = date.getHours();


    if (showTime >= 5 && showTime < 12) {
      setTime('Good Morning')
    }
    else if (showTime >= 12 && showTime < 18) {
      setTime('Good Afternoon')
    }
    else {
      setTime('Good Evening')
    }
  };

  const Kiosk = [
    { name: "Request Leave", link: "/request-leave" },
    { name: "View Payslip" },
    { name: "Email & Hardware Requisition", link: "/requisition" },
    { name: "Apply for a Loan", link: "/apply-loan" },
    // { name: "General Information", link: "/general-information" },
    // { name: 'View Claims', },
    // { name: 'Providence Call Center', },

  ];

  return (
    <>
      <Navbar />
      <Box className="text">
        <Center
          mt="9"
          fontSize={{ md: "3xl", base: "xl" }}
          style={{ fontWeight: "30px" }}
        >
          <Text color={'black'}>
            {time}
            {isLogged ? " " + name : " "}
          </Text>
        </Center>
      </Box>

      <Container maxW="container.xl">
        <SimpleGrid
          bg="gray.20"
          columns={{ sm: 1, md: 4 }}
          spacing="8"
          px="30"
          textAlign="center"
          rounded="lg"
          mt="12"
        >
          {Kiosk.map((item, index) => (
            <Link key={index} to={item.link}>
              <Box
                w="100%"
                h="80px"
                p="5"
                rounded="md"
                bg="#E0E0E0"
                className="homepage-box"
              >
                {item.name}
              </Box>
            </Link>
          ))}
        </SimpleGrid>
        {/* <Loader /> */}
      </Container>
    </>
  );
}

export default App;
