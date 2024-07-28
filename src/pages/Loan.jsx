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

export default function Loan() {

    const [reason, setReason] = useState('')
    const [currency, setCurrency] = useState('ZWL')

    const [accName, setAccName] = useState('')
    const [bank, setBank] = useState('')
    const [accNum, setAccNum] = useState('')
    const [branchName, setBranchName] = useState('')
    const [branchCode, setBranchCode] = useState('')
    const [declaration, setDeclaration] = useState(false)

    const [amount, setAmount] = useState('')
    const [installment, setInstallment] = useState('')
    const [gross, setGross] = useState('')
    const [net, setNet] = useState('')

    const [errorDiv, setErrorDiv] = useState(false) // error message from frontend validation
    const [errorText, setErrorText] = useState('')  // text based on the error
    const [loading, setLoading] = useState(false) // loading circle when user has submitted their id

    const toast = useToast()


    const bankDetails = [
        { name: 'Account Name', margin: '4', value: setAccName, base: '2' },
        { name: 'Bank Name', margin: '10', value: setBank, base: '8' },
        { name: 'Account Number', margin: '0', value: setAccNum, base: '-2' },
        { name: 'Branch Name', margin: '6', value: setBranchName, base: '4' },
        { name: 'Branch Code', margin: '7', value: setBranchCode, base: '5' },
    ]

    const handleSubmit = () => {
        setErrorText('')

        if (Validation()) {
            console.log({
                reason,
                amount,
                installment,
                gross,
                net,
                accName,
                bank,
                accNum,
                branchName,
                branchCode,
                declaration,
                currency,
            })

            toast({
                title: 'Success',
                description: 'Looks good',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'top-right'
            })


        }
        if (!Validation()) {
            notVal()
        }

    }

    const Validation = () => {
        if (!reason.trim()) {
            setErrorDiv(true)
            setErrorText('Please select reason')
        }
        else if (!amount.trim() || !installment.trim() || !gross.trim() || !net.trim()) {
            setErrorDiv(true)
            setErrorText('Please fill out loan and salary details')
        }
        else if (!accName.trim() || !branchName.trim() || !branchCode.trim() || !bank.trim() || !accNum.trim()) {
            setErrorDiv(true)
            setErrorText('Please input your banking details')
        }
        else if (declaration === false) {
            setErrorDiv(true)
            setErrorText('Please agree to the declaration')
        }
        else return true
    }

    const notVal = () => {
        toast({
            title: 'Failed to send',
            // description: 'Make sure you have completed all fields',
            description: errorText,
            status: 'error',
            duration: 4000,
            isClosable: true,
        })
    }

    const errorMessage = errorDiv ?
        <div style={{ color: "red", fontSize: "18px" }}>{errorText}</div>
        : '';

    return (
        <>
            <Navbar />
            <Container maxW='1100px' pt='4' >
                {errorDiv ?
                    <Alert status='error' >
                        <AlertIcon />
                        {/* <AlertTitle>Failed to send</AlertTitle> */}
                        <AlertDescription>{errorText}</AlertDescription>
                    </Alert> : ''}
                <FormControl isRequired>
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
                            onChange={(e) => setReason(e.target.value)}
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
                            <Select width={{ md: '8%' }} ml='4' onChange={(e) => setCurrency(e.target.value)} focusBorderColor='#FF6201'>
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
                                        onChange={(e) => setAmount(e.target.value)}
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
                                        onChange={(e) => setInstallment(e.target.value)}
                                        type='number' placeholder='enter loan installment'
                                        focusBorderColor='#FF6201'
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
                                        onChange={(e) => setGross(e.target.value)}
                                        type='number' placeholder='enter loan amount'
                                        focusBorderColor='#FF6201'
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
                                        onChange={(e) => setNet(e.target.value)}
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
                                        onChange={(e) => bank.value(e.target.value)}
                                        focusBorderColor='#FF6201'
                                    />

                                </Stack>
                            </Flex>
                        ))}
                    </Box>

                    <Box mt='6'>
                        <Text as='u' fontSize={{ md: 'xl' }}>Declaration</Text>

                        <Text mt='1'>By applying for this loan, the Borrower agrees to the terms set forth by the Lender, including the repayment of the loan amount with an agreed-upon interest rate. The Borrower also consents to any applicable fees associated with the loan. Funds will be disbursed to the Borrower's specified account upon approval, and the Borrower commits to adhering to the repayment schedule detailed in the agreement. Failure to meet these obligations may result in additional charges or legal action.</Text>
                        <Checkbox mt='4' colorScheme='orange' onChange={() => setDeclaration(!declaration)} required>I agree and accept to the terms</Checkbox>


                    </Box>
                    <Button colorScheme='orange'
                        size='md'
                        mt='5'
                        mb='10'
                        onClick={handleSubmit}
                        type='submit'
                    >
                        Submit Loan Application
                    </Button>
                </FormControl>
            </Container>
        </>
    )
}
