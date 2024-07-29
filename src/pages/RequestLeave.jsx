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
import { useForm } from "react-hook-form"
import axios from 'axios';


export default function test() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [leave, setLeave] = useState('')
    const [diffDays, setDiffDays] = useState('')
    const [formDate, setFormDate] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [loading, setLoading] = useState(false) // loading circle when user has submitted their id

    const Employee = useSelector((state) => state.auth.employee)

    const toast = useToast()

    const [advance, setAdvance] = useState(false)


    // const handleSubmit = (e) => { //handling the id the user has entered after they click login
    //     e.preventDefault()
    //     differenceInDays() //in the event the user doesn't check

    //     // setLoading(true)

    //     const AppLeave = {
    //         leave_type: leave,
    //         // employee_id: Employee.employee_role_id,
    //         start_date: startDate,
    //         end_date: endDate,
    //         requested_days: diffDays,
    //         // reason: '',
    //     }
    //     console.log(AppLeave)

    //     // axios.post(`${API}/leave/application`, AppLeave)
    //     //     .then((res) => {
    //     //         console.log(res.data)

    //     //         toast({
    //     //             title: 'Application Sent',
    //     //             description: res.data.message,
    //     //             status: 'success',
    //     //             duration: 4000,
    //     //             isClosable: true,
    //     //             position: 'top-right'
    //     //         })
    //     //     })
    //     //     .catch((error) => {
    //     //         console.log(error.data)

    //     //         toast({
    //     //             title: 'Leave Application Failed',
    //     //             description: error.data,
    //     //             status: 'error',
    //     //             duration: 4000,
    //     //             isClosable: true,
    //     //             position: 'top-right'
    //     //         })
    //     //     })
    //     //     .finally(() => {
    //     //         setLoading(false)
    //     //     })



    // }

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

    const differenceInDays = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = end - start
        const numOfDays = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1

        const dateArray = []
        for (let day = 0; day < numOfDays; day++) {
            const date = new Date(start);
            // const endDate = new Date(end)
            date.setDate(start.getDate() + day);
            dateArray.push(date.getDay()); // Or use any date format you prefer
        }

        const leaveDay = []
        for (let day = 0; day < dateArray.length; day++) {
            const firstDay = dateArray[day]
            const date = new Date(start);
            date.setDate(start.getDate() + day);
            // const test = dateArray[day].getDay()

            if (firstDay == 6 || firstDay == 0) {
                // console.log('weekend', firstDay)
            } else {
                leaveDay.push(firstDay)
            }

        }
        setDiffDays(leaveDay.length);
    }

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <>
            <Navbar />
            <Container maxW='1100px' color='' bg='' pt='4' >
                {/* <Center bg='red'> */}
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            focusBorderColor='#FF6201'
                            value='10 days'
                        />

                        <Text mt='6' ml={{ md: '5' }} >Leave Type:</Text>
                        <Select mt={{ md: '4' }} size='md' width={{ md: '19%', base: '60%' }} ml={{ md: '4' }}
                            placeholder='Select Leave Type:'
                            focusBorderColor='#FF6201'
                            borderRadius='xl'
                            // onChange={(e) => setLeave(e.target.value)}
                            {...register('leaveType')}

                        >
                            <option value='Annual Leave'>Annual Leave</option>
                            <option value='Maternity'>Maternity</option>
                            <option value='Paternity'>Paternity</option>
                            <option value='Sick Leave'>Sick Leave</option>
                            <option value='Study Leave'>Study Leave</option>
                            <option value='Special'>Special</option>
                        </Select>
                    </Box>

                    <Box display={{ md: "flex" }} mt='4'>
                        <Text mt='6'>
                            Start Date:
                        </Text>
                        <Input mt={{ md: '4' }} size='md' width={{ md: '20%', base: '60%' }} ml={{ md: '4' }}
                            type="date"
                            focusBorderColor='#FF6201'
                            borderRadius='xl'
                            onChange={(e) => setStartDate(e.target.value)}
                        // {...register('startDate')}
                        />

                        <Text mt='6' ml={{ md: '4' }}>
                            End Date:
                        </Text>
                        <Input mt={{ md: '4' }} size='md' width={{ md: '20%', base: '60%' }} ml={{ md: '4' }}
                            type="date"
                            focusBorderColor='#FF6201'
                            borderRadius='xl'
                            onChange={(e) => setEndDate(e.target.value)}
                        // {...register('endDate')}
                        />

                    </Box>

                    <Flex mt={6}>
                        <Button onClick={differenceInDays} colorScheme='orange'>calculate days</Button>
                        <Box mt={2} ml={3}>{diffDays + ' day(s) are being requested'}</Box>
                    </Flex>

                    <Box mt='7'>
                        <Text>Reason:</Text>
                        <Textarea placeholder='Specify your reason for leave' focusBorderColor='#FF6201' {...register('reason')} />
                    </Box>
                    {loading ? Loader : <Box pt={3} >

                        <Button colorScheme='orange'
                            size='md'
                            mt='6'
                            onClick={handleSubmit}
                            type="submit"

                        >
                            Submit Leave Application
                        </Button>
                    </Box>}

                </form>
                {/* <Box>Leave type: {leave}</Box>
                <Box>start date: {startDate}</Box>
                <Box>end date: {endDate}</Box> */}
            </Container>

        </>

    )
}
