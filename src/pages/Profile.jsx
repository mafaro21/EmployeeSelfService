import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import { Container, Box, Text, Stack, Input, Flex, Button } from '@chakra-ui/react'
import { useForm } from "react-hook-form"

export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [branchCode, setBranchCode] = useState('')
    const [disabled, setDisabled] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm()

    const profile = [
        { name: 'First Name', margin: '9', value: setFirstName, base: '9', place: 'from state', type: 'text' },
        { name: 'Last Name', margin: '9', value: setLastName, base: '9', place: 'from state', type: 'text' },
        { name: 'Address', margin: '14', value: setAddress, base: '14', place: 'from state', type: 'text' },
        { name: 'Phone Number', margin: '1', value: setPhone, base: '1', place: '0123456', type: 'number' },
        { name: 'Branch Code', margin: '6', value: setBranchCode, base: '6', place: 'from state', type: 'text' },
    ]

    const onSubmit = (data) => {
        console.log(data)
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
                                    onChange={(e) => profile.value(e.target.value)}
                                    // {...register(profile.value)}
                                    focusBorderColor='#FF6201'
                                    value={profile.place}
                                    disabled={disabled == true ? 'disabled' : null}
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
                        <Box>
                            <Button colorScheme='orange'
                                size='md'
                                mt='6'
                            // onClick={() => setDisabled(!disabled)}

                            >
                                Save Changes
                            </Button>
                        </Box>
                    }
                </form>
            </Container>
        </>
    )
}
