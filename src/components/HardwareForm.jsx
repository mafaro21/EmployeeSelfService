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

export default function HardwareForm() {
    const [selectedHardware, setSelectedHardware] = useState([]);
    const [selectedSoftware, setSelectedSoftware] = useState([]);
    const [reason, setReason] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [errorDiv, setErrorDiv] = useState(false) // error message from frontend validation
    const [errorText, setErrorText] = useState('')  // text based on the error
    const [loading, setLoading] = useState(false) // loading circle when user has submitted their id

    const toast = useToast()

    const handleHardwareChange = (value) => {
        setSelectedHardware(value);
    };

    const handleSoftwareChange = (value) => {
        setSelectedSoftware(value);
    };

    const handleSubmit = () => {
        setErrorDiv(false)
        setLoading(true)

        if (Validation()) {

            toast({
                title: 'Success',
                description: 'Looks good',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'top-right'
            })

            console.log({
                selectedHardware,
                selectedSoftware,
                reason
            }
            )
        }

        setLoading(false)

    };

    const Validation = () => {
        if (/script|<|>/i.test(reason) || /script|<|>/i.test(additionalDetails)) {
            setErrorDiv(true)
            setErrorText('You have entered dangerous scripts')
        }
        else if (selectedHardware.length === 0 || selectedSoftware.length === 0) {
            setErrorDiv(true)
            setErrorText('Specify hardware & software')
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
                <Text mb={4} fontSize={{ md: "3xl", base: "2xl" }}>Hardware Requisition Form</Text>

                <FormControl id="hardware">
                    <Text as='u' fontSize={{ md: 'xl' }}>Hardware Needed</Text>
                    <CheckboxGroup onChange={handleHardwareChange} value={selectedHardware}>
                        <HStack spacing={4} mt='2' fontSize={{ md: 'xl' }}>
                            <Checkbox value="laptop" colorScheme='orange'>Laptop</Checkbox>
                            <Checkbox value="desktop" colorScheme='orange'>Desktop</Checkbox>
                            <Checkbox value="printer" colorScheme='orange'>Printer</Checkbox>
                            <Checkbox value="adapter" colorScheme='orange'>Power Adapter</Checkbox>
                        </HStack>
                    </CheckboxGroup>
                </FormControl>

                <FormControl id="software" mt={3}>
                    <Text as='u' fontSize={{ md: 'xl' }}>Software to Install</Text>
                    <CheckboxGroup onChange={handleSoftwareChange} value={selectedSoftware} >
                        <HStack spacing={4} mt='2'>
                            <Checkbox value="Microsoft Office" fontSize={{ md: 'xl' }} colorScheme='orange'>Microsoft Office</Checkbox>
                            <Checkbox value="Adobe Acrobat" colorScheme='orange'>Adobe Acrobat</Checkbox>
                            <Checkbox value="Google Chrome" colorScheme='orange'>Google Chrome</Checkbox>
                            <Checkbox value="Belina" colorScheme='orange'>Belina</Checkbox>
                            <Checkbox value="Quick Books" colorScheme='orange'>Quick Books</Checkbox>
                            <Checkbox value="Pastel" colorScheme='orange'>Pastel</Checkbox>
                        </HStack>
                    </CheckboxGroup>
                </FormControl>

                <FormControl id="reason" mt={6} >
                    <Text as='u' fontSize={{ md: 'xl' }}>Reason for Request</Text>
                    <Textarea
                        placeholder="Enter your reason here..."
                        size="md"
                        onChange={(e) => setReason(e.target.value)}
                        value={reason}
                        focusBorderColor='#FF6201'
                        mt='2'
                    />
                </FormControl>

                <FormControl id="additionalDetails" mt={4}>
                    <Text as='u' fontSize={{ md: 'xl' }}>Additional Details</Text>
                    <Textarea
                        placeholder="Any additional details or specifications like quantity..."
                        size="md"
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        value={additionalDetails}
                        mt='2'
                        focusBorderColor='#FF6201'
                    />
                </FormControl>
                {errorMessage}

                {loading ? Loader :
                    <Button colorScheme="orange" mt={4} onClick={handleSubmit} mb='10'>
                        Submit Hardware Requisition
                    </Button>
                }

            </VStack>
        </>
    )
}
