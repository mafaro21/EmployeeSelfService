import {
    Box, Flex, Heading, Text, Button, FormControl,
    FormLabel,
    Input,
    Center,
    VStack,
    useToast,
    Spacer
} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Add() {
    const toast = useToast()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [gender, setGender] = useState('')

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const addemployee = [
        { data: 'First Name', place: 'Enter the Name', type: 'name', value: 'firstname' },
        { data: 'Last Name', place: 'Enter the Name', type: 'name', value: 'lastname' },
        { data: 'Gender', place: 'Enter the Gender', type: 'name', value: 'gender' },
        { data: 'Address', place: 'Enter the Address', type: 'name', value: 'address' },
        { data: 'Email', place: 'Enter the Email', type: 'name', value: 'email' },
        { data: 'Date of Birth', place: 'Enter the Date', type: 'date', value: 'dateofbirth' },
        { data: 'National ID', place: 'Enter the National ID', type: 'name', value: 'nationalid' },
        { data: 'Phone Number', place: 'Enter the Phone Number', type: 'number', value: 'phonenumber' },
        // { data: 'Employment Status', place: 'Enter the Phone Number', type: 'number', value: 'phonenumber' },
        { data: 'Marital Status', place: 'Enter your Marital Status', type: 'name', value: 'maritalstatus' },
        // { data: 'Image', place: 'Enter the Name', type: 'name' },
        // { data: 'Image', place: 'Enter the Name', type: 'name' },
        // { data: 'Image', place: 'Enter the Name', type: 'name' },
        // { data: 'Image', place: 'Enter the Name', type: 'name' },
        // { data: 'Image', place: 'Enter the Name', type: 'name' },
    ]

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:8888/employee/add', data)
            .then((res) => {
                console.log(res.data)

                toast({
                    title: "Employee added successfully",
                    description: "You've added a new employee",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });

                reset({
                    firstname: '',
                    lastname: '',
                    gender: '',
                    address: '',
                    email: '',
                    dateofbirth: '',
                    nationalid: '',
                    phonenumber: '',
                    maritalstatus: '',
                })
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Error",
                    description: "Error adding employee",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='.admin-bg'>
                <Box mt={3} p={{ base: 3, md: 7 }} borderRadius={'12px'} style={{ border: '2px solid #9B3922' }}>
                    <Text fontSize={'lg'} textAlign={'center'}>Add a new employee</Text>
                    <VStack spacing={4} mt='' p={{ base: 0, md: 9 }}>
                        {/* {errorMessage} */}
                        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                        {addemployee.map((add, index) =>

                            <FormControl>
                                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                                    <FormLabel mt={{ base: 4, md: 1 }} ><Text mt={1}>
                                        {add.data}
                                    </Text> </FormLabel>
                                    <Spacer />
                                    <Input type={add.type}
                                        placeholder={add.place}
                                        pl={1}
                                        // onChange={add.info}
                                        {...register(add.value)}
                                        variant={'flushed'}
                                        isRequired={'true'}
                                        focusBorderColor='#f63'
                                        width={{ base: '100%', md: '88%' }}
                                    // isInvalid={errorDiv ? 'red' : ''}
                                    />
                                </Flex>
                            </FormControl >
                        )}
                        <Button bg='#F63E02' mt='3' type='submit'>Add Employee</Button>
                        {/* </form> */}
                    </VStack>
                </Box>
            </form>
        </>
    )
}
