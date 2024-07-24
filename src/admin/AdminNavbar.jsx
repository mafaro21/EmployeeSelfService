// import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import MyImage from "../img/PWhite 1.png";
import AdminDrawer from "./AdminDrawer.jsx";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  //   Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  //   useDisclosure,
  //   useColorModeValue,
  //   Stack,
  //   Image,
} from "@chakra-ui/react";

export default function AdminNavbar() {
  return (
    <>
      <Box bg="#F63E02" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <AdminDrawer />
          <HStack spacing={8} alignItems={"center"}>
            <Link to={'/dashboard'}>
              <Box
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color={'white'}
              >
                dashboard
              </Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar name="Mafa Mafa" bg="black" />
              </MenuButton>
              <MenuList>
                <MenuItem>Edit My Profile</MenuItem>
                <MenuItem>FAQs</MenuItem>
                <MenuDivider />
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
