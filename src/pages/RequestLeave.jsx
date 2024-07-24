import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {
    Spinner, Box, Container, Flex, Grid, GridItem, Button,
    Input, Spacer, Text, Select, Center, Textarea, useToast,
    Checkbox

} from '@chakra-ui/react'
import '../App.css'
import { API } from '../config'

import { useSelector } from 'react-redux';
import axios from 'axios';



export default function test() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [leave, setLeave] = useState('')

    const [loading, setLoading] = useState(false) // loading circle when user has submitted their id

    const Employee = useSelector((state) => state.auth.employee)

    const toast = useToast()

    const [advance, setAdvance] = useState(false)


    const handleSubmit = (e) => { //handling the id the user has entered after they click login
        e.preventDefault()

        // setLoading(true)

        const AppLeave = {
            leave_type_id: 1,
            employee_id: Employee.employee_role_id,
            start_date: startDate,
            end_date: endDate,
            request_advance: advance,
            reason: '',
        }
        console.log(AppLeave)

        // axios.post(`${API}/leave/application`, AppLeave)
        //     .then((res) => {
        //         console.log(res.data)

        //         toast({
        //             title: 'Application Sent',
        //             description: res.data.message,
        //             status: 'success',
        //             duration: 4000,
        //             isClosable: true,
        //             position: 'top-right'
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error.data)

        //         toast({
        //             title: 'Leave Application Failed',
        //             description: error.data,
        //             status: 'error',
        //             duration: 4000,
        //             isClosable: true,
        //             position: 'top-right'
        //         })
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })



    }

    const Loader = loading ? // loading circle
        <Box pt={4}>
            <Spinner
                color='#007a41'
                p={4}
                thickness='3px'
                speed='0.85s'
                emptyColor='gray.200'
            />
        </Box> : ''

    return (
        <>
            <Navbar />
            <Container maxW='1100px' color='' bg='' pt='4' >
                {/* <Center bg='red'> */}
                <Box >
                    {/* <Center> */}
                    <Text fontSize={{ md: "3xl", base: "xl" }}>
                        Apply for Leave
                    </Text>
                    {/* </Center> */}
                    <Box display={{ md: "flex" }} mt='6'>
                        <Text mt='6'>
                            Current available leave days:
                        </Text>
                        <Input mt={{ md: '4' }}
                            size='md'
                            width={{ md: '10%' }}
                            ml={{ md: '4' }}
                            isReadOnly
                            // style={{ border: '1px solid black' }}
                            // focusBorderColor='lime'
                            value='10 days'
                        />

                        <Text mt='6' ml={{ md: '5' }} >Leave Type:</Text>
                        <Select mt={{ md: '4' }} size='md' width={{ md: '19%', base: '60%' }} ml={{ md: '4' }}
                            placeholder='Select Leave Type:'
                            focusBorderColor='lime'
                            borderRadius='xl'
                            onChange={(e) => setLeave(e.target.value)}
                        >
                            <option value='Annual Leave'>Annual Leave</option>
                            <option value='option2'>Maternity</option>
                            <option value='option3'>Paternity</option>
                            <option value='option4'>Sick Leave</option>
                            <option value='option4'>Study Leave</option>
                            <option value='option6'>Special</option>
                        </Select>
                    </Box>

                    <Box display={{ md: "flex" }} mt='4'>
                        <Text mt='6'>
                            Start Date:
                        </Text>
                        <Input mt={{ md: '4' }} size='md' width={{ md: '20%', base: '60%' }} ml={{ md: '4' }}
                            type="datetime-local"
                            focusBorderColor='lime'
                            borderRadius='xl'
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                        <Text mt='6' ml={{ md: '4' }}>
                            End Date:
                        </Text>
                        <Input mt={{ md: '4' }} size='md' width={{ md: '20%', base: '60%' }} ml={{ md: '4' }}
                            type="datetime-local"
                            focusBorderColor='lime'
                            borderRadius='xl'
                            onChange={(e) => setEndDate(e.target.value)}

                        />
                    </Box>
                    <Box mt='5'>
                        {/* <Checkbox
                            onChange={() => setAdvance(!advance)}
                            colorScheme='green'
                        >Would you want your salary in advance?
                        </Checkbox> */}
                    </Box>
                    <Box mt='7'>
                        <Text>Reason:</Text>
                        <Textarea placeholder='Specify your reason for leave' focusBorderColor='lime' />
                    </Box>
                    {loading ? Loader : <Box pt={3} >

                        <Button colorScheme='orange'
                            size='md'
                            mt='6'
                            onClick={handleSubmit}

                        >
                            Submit Leave Application
                        </Button>
                    </Box>}

                </Box>
                {/* <Box>Leave type: {leave}</Box>
                <Box>start date: {startDate}</Box>
                <Box>end date: {endDate}</Box> */}
            </Container>

        </>

    )
}
