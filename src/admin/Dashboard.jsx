import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminDrawer from "./AdminDrawer";
import { Flex, Grid, GridItem, Box, Text, SimpleGrid } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import "../App.css";

export default function Dashboard() {
  const Kiosk = [
    { name: "Leave Table", link: "/leave-requests" },
    { name: "Approve Leave Requests", link: "/leave-decision" },
    { name: "Employee Share Trust Fund " },
    { name: "Employee Management", link: '/admin/employee' },
  ];
  return (
    <Box className="admin-bg">
      <AdminNavbar />

      <Box w="100%" color="black">
        <Box p="5" alignItems="center" mx="8">
          <Text fontWeight="bold" fontSize="2xl">
            Welcome to the Admin Dashboard
          </Text>
        </Box>

        <SimpleGrid
          bg="gray.20"
          columns={{ sm: 1, md: 3 }}
          spacing="8"
          px="30"
          textAlign="center"
          rounded="lg"
          color="black"
          mt="12"
          pb="8"
        >
          {Kiosk.map((item) => (
            <Link to={item.link}>
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
      </Box>
    </Box>
  );
}
