import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import { Container, Box, Text, Stack, Input, Flex, Button, useToast } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Loader from '../components/Loader'

export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [branchCode, setBranchCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const toast = useToast();


    const profile = [
        { name: 'First Name', margin: '9', value: 'firstName', base: '9', place: 'from state', type: 'text' },
        { name: 'Last Name', margin: '9', value: 'lastName', base: '9', place: 'from state', type: 'text' },
        { name: 'Address', margin: '14', value: 'address', base: '14', place: 'from state', type: 'text' },
        { name: 'Phone Number', margin: '1', value: 'phone', base: '1', place: '0123456', type: 'number' },
        { name: 'Branch Code', margin: '6', value: 'branchCode', base: '6', place: 'from state', type: 'text' },
    ]

    const onSubmit = (data) => {
        setLoading(true)
        axios.put('http://localhost:8888/employee/edit', data)
            .then((res) => {
                console.log(res.data)
                toast({
                    title: "Profile Updated!",
                    description: "You have successfully logged in.",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Error Updating Profile!",
                    description: "You have successfully logged in.",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Navbar />

            <Container maxW='1100px' color='' bg='' pt='4'>
                <Text fontSize={{ md: "3xl", base: "xl" }}>
                    User's Profile
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {profile.map((profile, key) => (
                        <Flex mt='2'>

                            <Text mt={{ md: '6', base: '3' }}>{profile.name}:</Text>
                            <Stack spacing={4} ml='10'>
                                <Input
                                    mt={{ md: '4', base: '1' }}
                                    ml={{ md: profile.margin, base: profile.base }}
                                    size='md'
                                    width={{ md: '450px' }}
                                    type={profile.type}
                                    // onChange={(e) => profile.value(e.target.value)}
                                    {...register(profile.value)}
                                    focusBorderColor='#FF6201'
                                    // value={profile.place}
                                    disabled={disabled ? 'disabled' : null}
                                />

                            </Stack>
                        </Flex>
                    ))}

                    <Button colorScheme={disabled ? 'blue' : 'red'}
                        size='md'
                        mt='6'
                        onClick={() => setDisabled(!disabled)}

                    >
                        {disabled ? 'Edit Profile' : 'Cancel Editing'}
                    </Button>

                    {disabled ? null :
                        loading ? <Loader /> :
                            <Box>
                                <Button colorScheme='orange'
                                    size='md'
                                    mt='6'
                                    // onClick={() => setDisabled(!disabled)}
                                    type='submit'
                                >
                                    Save Changes
                                </Button>
                            </Box>
                    }
                </form>
                {/* <Loader /> */}
            </Container>
        </>
    )
}
