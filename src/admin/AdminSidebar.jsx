// import React from "react";
// import Navbar from './Navbar'
import { Box, Text } from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const LinkItems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "login", link: "/login" },
    { name: "Other" },
  ];
  return (
    <>
      <Box w="17.5%" color="white">
        <Box bg="#F63E02" pos="fixed" h="100%" w="15%">
          {LinkItems.map((link) => (
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
