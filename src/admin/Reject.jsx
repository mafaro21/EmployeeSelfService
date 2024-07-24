import { CloseIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'
import { React, useRef } from 'react'

export default function test({ setReject }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const rej = () => {
        setReject(true)
    }

    return (
        <>
            <Button colorScheme='red' onClick={onOpen} size='sm'><CloseIcon /></Button>
            <AlertDialog
                motionPreset='slideInBottom'
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
                        Are you sure you want to reject leave?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button variant='outline' colorScheme='pink' ref={cancelRef} onClick={onClose} >
                            No
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={rej}>
                            Reject
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
