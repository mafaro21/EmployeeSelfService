import { useState, useRef, useEffect } from 'react'
import '../App.css'
import MyImage from '../img/prov wo bg.png'
import Drawer from './Drawer'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    Image,
    useDisclosure,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link, useNavigate, redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../Store/Auth'
import { useToast } from '@chakra-ui/react'



function Navbar() {

    const [name, setName] = useState('')

    const Employee = useSelector((state) => state.auth.employee)

    const isLogged = useSelector((state) => state.auth.isAuthenticated)

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const cancelRef = useRef()

    const toast = useToast()


    // useEffect(() => {
    //     if (isLogged) {
    //         setName(Employee.first_name + ' ' + Employee.last_name)

    //     } else {
    //         toast({
    //             title: 'You are not logged in',
    //             description: "You are not able to access the site without logging in.",
    //             status: 'error',
    //             duration: 6000,
    //             isClosable: true,
    //             position: 'top-right'
    //         })
    //         navigate('/login')
    //         // return redirect("/dashboard");
    //     }

    // })

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log('first')
        dispatch(authActions.setLogout())
        toast({
            title: 'You are now logged out',
            description: "See you again soon",
            status: 'info',
            duration: 6000,
            isClosable: true,
            position: 'top-right'
        })
        navigate('/login')

    }

    return (
        <>
            <Box className='gradient' px={4} style={{ borderBottom: '1px #9F9F9F solid' }}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Drawer />

                    <HStack spacing={8} alignItems={'center'}>
                        <Link to={'/'}>
                            <Box as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>

                                <Text>Home</Text>
                            </Box>
                        </Link>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>

                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                {isLogged ? (<Avatar
                                    name={name}
                                    bg='black'
                                    color='white'
                                />) : (
                                    <Avatar
                                        name=''
                                        bg='black'
                                    />
                                    // null
                                )}

                            </MenuButton>
                            <MenuList className='bord'>
                                <Box p='3' color='grey' className='menu'>
                                    <Text fontSize='xs' as='b'>{name}</Text>
                                    {/* <Text fontSize='xs' >IT ADMIN</Text> */}
                                </Box>
                                <Link to={'/profile'}><MenuItem className='alert'>Edit My Profile</MenuItem></Link>
                                <MenuItem className='alert'>FAQs</MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={onOpen} className='alert'>Log Out</MenuItem>


                                <AlertDialog
                                    motionPreset='slideInBottom'
                                    leastDestructiveRef={cancelRef}
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    isCentered

                                >
                                    <AlertDialogOverlay />

                                    <AlertDialogContent>
                                        <AlertDialogHeader>Log Out?</AlertDialogHeader>
                                        <AlertDialogCloseButton />
                                        <AlertDialogBody>
                                            Are you sure you want to log out?
                                        </AlertDialogBody>
                                        <AlertDialogFooter>
                                            <Button variant='outline' colorScheme='whatsapp' ref={cancelRef} onClick={onClose}>
                                                No
                                            </Button>
                                            <Button colorScheme='red' ml={3} onClick={handleLogout}>
                                                Log Out
                                            </Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

            </Box>

        </>
    )
}

export default Navbar
