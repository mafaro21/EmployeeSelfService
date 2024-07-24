import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Drawer,
  DrawerBody,
  //DrawerFooter,
  DrawerHeader,
  //Input,
  //Button,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Drawerr() {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LinkItems = [
    { name: "Admin Dashboard", link: "/dashboard" },
    { name: "Leave Requests", link: "/leave-requests" },
    { name: "General user home", link: "/" },

  ];

  return (
    <>
      <HamburgerIcon
        aria-label={"Open Menu"}
        boxSize={7}
        color={"white"}
        ref={btnRef}
        onClick={onOpen}
        className="admin-drawer"
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#134539" color='white'>
          <DrawerCloseButton />
          <DrawerHeader>Navigate</DrawerHeader>

          <DrawerBody>
            <Box>
              <Box>
                {LinkItems.map((link) => (
                  <Link to={link.link}>
                    <Box
                      h=""
                      alignItems="center"
                      mx=""
                      p="2"
                      className="sidebar"
                    >
                      <Text fontSize="18" p="">
                        {link.name}
                      </Text>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </DrawerBody>

          {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
