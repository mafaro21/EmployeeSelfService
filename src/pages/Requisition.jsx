import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Stack,
    Radio,
    CheckboxGroup,
    Checkbox,
    Textarea,
    Button,
    Input,
    Heading,
    Box,
    VStack,
    HStack,
    Container,
    Text,
    Flex,
    Center,
    Divider,
} from '@chakra-ui/react';
import HardwareForm from '../components/HardwareForm';
import EmailForm from '../components/EmailForm';

export default function Requisition() {

    const [showPage, setShowPage] = useState('hardware')

    let x = '#FF6201'

    return (
        <>
            <Navbar />
            <Container maxW='1100px' pt='4' bg={'blue'}>
                <Box>
                    <Flex bg='' h='7' className='req'>

                        <Center
                            style={{ width: '50%', borderRight: '2px solid #ebeef0', borderBottom: `2px solid ${showPage === 'hardware' ? x : '#ebeef0'}` }}
                            onClick={() => setShowPage('hardware')}
                        >
                            Hardwares</Center>
                        <Center
                            style={{ width: '50%', borderBottom: `2px solid ${showPage === 'email' ? x : '#ebeef0'}` }}
                            onClick={() => setShowPage('email')}
                        >
                            Email</Center>

                    </Flex>
                </Box>

                {showPage === 'hardware' ? <HardwareForm /> : ''}
                {showPage === 'email' ? <EmailForm /> : ''}


            </Container>
        </>
    )
}
