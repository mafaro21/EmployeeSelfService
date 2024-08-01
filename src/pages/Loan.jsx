import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import {
    Spinner, Box, Container, Flex, Grid, GridItem, Button,
    Input, Spacer, Text, Select, Center, Textarea, useToast,
    Checkbox, Stack, InputGroup, InputLeftAddon, FormControl, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,

} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Loader from '../components/Loader'

export default function Loan() {

    const [currency, setCurrency] = useState('ZWL')
    const [declaration, setDeclaration] = useState(false)

    const [loading, setLoading] = useState(false) // loading circle when user has submitted their id

    const toast = useToast()

    const { register, formState: { errors }, handleSubmit } = useForm()


    const bankDetails = [
        { name: 'Account Name', margin: '4', value: 'accName', base: '2' },
        { name: 'Bank Name', margin: '10', value: 'bank', base: '8' },
        { name: 'Account Number', margin: '0', value: 'accNum', base: '-2' },
        { name: 'Branch Name', margin: '6', value: 'branchName', base: '4' },
        { name: 'Branch Code', margin: '7', value: 'branchCode', base: '5' },
    ]

    const onSubmit = (data) => {
        setLoading(true)
        axios.post('http://localhost:8888/loan/apply', data)
            .then((res) => {
                console.log(res.data)
                toast({
                    title: "Leave Application Sent!",
                    description: "Application waiting approval",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Application Error",
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
            <Container maxW='1100px' pt='4' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box >
                        {/* <Center> */}
                        <Text fontSize={{ md: "3xl", base: "2xl" }}>
                            Apply for a loan
                        </Text>
                    </Box>
                    <Box display={{ md: "flex" }} mt='6'>
                        <Text mt='6'>Reason for Loan Application:</Text>
                        <Select mt={{ md: '4' }} size='md' width={{ md: '19%', base: '79%' }} ml={{ md: '4' }}
                            placeholder='Select Reason:'
                            focusBorderColor='#FF6201'
                            borderRadius='xl'
                            {...register('reason')}
                        >
                            <option value='Medical'>Medical</option>
                            <option value='Education'>Education</option>
                            <option value='Housing'>Housing</option>
                            <option value='Car'>Car</option>

                        </Select>
                    </Box>
                    <Box mt='4'>
                        <Text as='u' fontSize={{ md: 'xl' }}>Loan Details</Text>
                        <Flex>
                            <Text mt='2'>Choose Currency:</Text>
                            <Select width={{ md: '8%' }} ml='4' {...register('currency')} onChange={(e) => setCurrency(e.target.value)} focusBorderColor='#FF6201'>
                                <option value='ZWL'>ZWL</option>
                                <option value='USD'>USD</option>
                            </Select>
                        </Flex>
                        <Box display={{ md: "flex" }} mt='1'>
                            <Text mt='6'>Loan Amount:</Text>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftAddon mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '%' }}
                                        ml={{ md: '4' }} children={currency + ' $'} />
                                    <Input
                                        mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '80%' }}
                                        {...register('loanAmount')}
                                        type='number' placeholder='enter loan amount'
                                        focusBorderColor='#FF6201'
                                        required
                                    />
                                </InputGroup>
                            </Stack>

                            <Text mt='6' ml={{ md: '10' }}>Loan Installment:</Text>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftAddon mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '%' }}
                                        ml={{ md: '4' }} children={currency + ' $'} />
                                    <Input
                                        mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '80%' }}
                                        {...register('loanInstallment')}
                                        type='number' placeholder='enter loan installment'
                                        focusBorderColor='#FF6201'
                                        required
                                    />
                                </InputGroup>
                            </Stack>
                        </Box>
                    </Box>

                    <Box mt='7'>
                        <Text as='u' fontSize={{ md: 'xl' }}>Salary Details</Text>
                        {/* <Flex>
                        <Text mt='2'>Choose Currency:</Text>
                        <Select width={{ md: '8%' }} ml='4' onChange={(e) => setCurrency(e.target.value)} focusBorderColor='#FF6201'>
                            <option value='ZWL'>ZWL</option>
                            <option value='USD'>USD</option>
                        </Select>
                    </Flex> */}
                        <Box display={{ md: "flex" }} mt='1'>
                            <Text mt='6'>Gross Salary:</Text>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftAddon mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '%' }}
                                        ml={{ md: '4' }} children={currency + ' $'} />
                                    <Input
                                        mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '80%' }}
                                        {...register('gross')}
                                        type='number' placeholder='enter loan amount'
                                        focusBorderColor='#FF6201'
                                        required
                                    />
                                </InputGroup>
                            </Stack>

                            <Text mt='6' ml={{ md: '10' }}>Net Salary:</Text>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftAddon mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '%' }}
                                        ml={{ md: '4' }} children={currency + ' $'} />
                                    <Input
                                        mt={{ md: '4' }}
                                        size='md'
                                        width={{ md: '80%' }}
                                        {...register('net')}
                                        type='number' placeholder='enter loan installment'
                                        focusBorderColor='#FF6201'
                                        isRequired
                                    />
                                </InputGroup>
                            </Stack>
                        </Box>
                    </Box>

                    <Box mt='7'>
                        <Text as='u' fontSize={{ md: 'xl' }}>Bank account to be credited into</Text>
                        {bankDetails.map((bank, key) => (
                            <Flex mt='2'>

                                <Text mt={{ md: '6', base: '3' }}>{bank.name}:</Text>
                                <Stack spacing={4} ml='10'>
                                    <Input
                                        mt={{ md: '4', base: '1' }}
                                        ml={{ md: bank.margin, base: bank.base }}
                                        size='md'
                                        width={{ md: '450px' }}
                                        type='number'
                                        {...register(bank.value)}
                                        focusBorderColor='#FF6201'
                                        required
                                    />

                                </Stack>
                            </Flex>
                        ))}
                    </Box>

                    <Box mt='6'>
                        <Text as='u' fontSize={{ md: 'xl' }}>Declaration</Text>

                        <Text mt='1'>By applying for this loan, the Borrower agrees to the terms set forth by the Lender, including the repayment of the loan amount with an agreed-upon interest rate. The Borrower also consents to any applicable fees associated with the loan. Funds will be disbursed to the Borrower's specified account upon approval, and the Borrower commits to adhering to the repayment schedule detailed in the agreement. Failure to meet these obligations may result in additional charges or legal action.</Text>
                        <Checkbox mt='4' colorScheme='orange' required>I agree and accept to the terms</Checkbox>

                    </Box>
                    {loading ? <Loader /> :
                        <Button colorScheme='orange'
                            size='md'
                            mt='5'
                            mb='10'
                            type='submit'
                        >
                            Submit Loan Application
                        </Button>}
                    {/* <Loader /> */}
                </form>
            </Container>
        </>
    )
}
