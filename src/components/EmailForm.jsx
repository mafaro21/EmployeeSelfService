import React, { useState } from 'react'
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
    Spinner,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'


export default function EmailForm() {

    const [domain, setDomain] = useState([]);
    const [reason, setReason] = useState('');
    const [errorDiv, setErrorDiv] = useState(false) // error message from frontend validation
    const [errorText, setErrorText] = useState('')  // text based on the error
    const [loading, setLoading] = useState(false) // loading circle when user has submitted their id

    const toast = useToast()

    const DomainChoice = (value) => {
        setDomain(value);
    };

    const handleSubmit = () => {
        setErrorDiv(false)
        setLoading(true)

        if (Validation()) {
            console.log({
                domain,
                reason,
            });

            toast({
                title: 'Success',
                description: 'Looks good',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'top-right'
            })
        }


        setLoading(false)
    };

    const Validation = () => {
        if (/script|<|>/i.test(reason)) {
            setErrorDiv(true)
            setErrorText('You have entered dangerous scripts')
        }
        else if (domain.length === 0) {
            setErrorDiv(true)
            setErrorText('Please select a domain')
        }
        else if (!reason.trim()) {
            setErrorDiv(true)
            setErrorText('You have not specified your reason')
        }
        else {
            return true
        }
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

    const errorMessage = errorDiv ?
        <div style={{ color: "red", fontSize: "18px" }}>{errorText}</div>
        : '';

    return (
        <>
            <VStack align="start" mt='6'>
                <Text mb={4} fontSize={{ md: "3xl", base: "2xl" }}>Email Requisition Form</Text>

                <FormControl isRequired id="hardware">
                    <Text as='u' fontSize={{ md: 'xl' }}>Select Domain</Text>
                    <RadioGroup onChange={DomainChoice} value={domain}>
                        <VStack spacing={1} mt='2' align='left'>
                            <Radio colorScheme='orange' value="providencehumancapital.com">providencehumancapital.com</Radio>
                            <Radio colorScheme='orange' value="providencehealth.co.zw">providencehealth.co.zw</Radio>
                            <Radio colorScheme='orange' value="staffingsolutions.co.zw">staffingsolutions.co.zw</Radio>
                        </VStack>
                    </RadioGroup>
                </FormControl>

                <FormControl isRequired id="reason" mt={6}>
                    <Text as='u' fontSize={{ md: 'xl' }}>Purpose for Email</Text>
                    <Textarea
                        placeholder="Enter your reason here..."
                        size="md"
                        onChange={(e) => setReason(e.target.value)}
                        value={reason}
                        focusBorderColor='orange'
                        mt='2'
                    />
                </FormControl>
                {errorMessage}

                {loading ? Loader :
                    <Button colorScheme="orange" mt={4} onClick={handleSubmit} mb='10'>
                        Submit Email Requisition
                    </Button>
                }
            </VStack>
        </>
    )
}
