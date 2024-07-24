//import React from 'react'
// import Navbar from './Navbar'
import { Box, Text } from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const LinkItems = [
    { name: "Home", link: "/" },
    { name: "admin Dashboard", link: "/dashboard" },
    { name: "login", link: "/login" },
    { name: "Other" },
    { name: "something" },
    { name: "something" },
    { name: "Don't click, please" },
  ];

  return (
    <>
      <Box>
        <Box
          bg="#B4FFB7"
          pos="fixed"
          h="100%"
          w="15%"
          style={{ borderRight: "1px #9F9F9F solid" }}
        >
          {LinkItems.map((link, key) => (
            <Link to={link.link}>
              <Box h="" alignItems="center" mx="" p="3" className="sidebar">
                <Text ml="2" fontSize="18">
                  {link.name}
                </Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
}
