import { HamburgerIcon } from '@chakra-ui/icons'
import {
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    Input,
    Button,
    Box,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Drawerr() {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const LinkItems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'admin Dashboard', link: '/dashboard' },
        { id: 3, name: 'login', link: '/login' },
        { id: 4, name: 'request Leave', link: '/request-leave' },
    ]

    return (
        <>
            <HamburgerIcon
                aria-label={'Open Menu'}
                boxSize={7}
                color={'black'}
                ref={btnRef}
                onClick={onOpen}
                className='drawer'
            />

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='#F3B700'>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigate</DrawerHeader>

                    <DrawerBody>
                        <Box >
                            <Box>
                                {LinkItems.map((link) => (
                                    <Link to={link.link} key={link.id}>
                                        <Box h="" alignItems="center" mx="" p='2' className='sidebar' >
                                            <Text fontSize='18' p=''>
                                                {link.name}
                                            </Text>
                                        </Box>
                                    </Link>

                                ))}

                            </Box>
                        </Box >
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
