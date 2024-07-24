import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import { React, useRef, useState, useEffect } from "react";

export default function test({ approve, setApprove }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  // const [rejection, setRejection] = useState(currentState)

  // useEffect(() => {
  //     setRejection(currentState)

  // }, [currentState, setRejection])

  const app = () => {
    setApprove(true);
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen} size="sm" mr="1">
        <CheckIcon />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Confirmation</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to approve leave?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              variant="outline"
              colorScheme="pink"
              ref={cancelRef}
              onClick={onClose}
            >
              No
            </Button>
            <Button colorScheme="green" ml={3} onClick={app}>
              Approve
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
