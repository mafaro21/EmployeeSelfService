import {
    Box, Flex, Heading, Text, Button, FormControl,
    FormLabel,
    Input,
    Center,
    VStack,
    useToast, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
// import { setPage } from '../../state/ProductPage'
// import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'


export default function Edit() {
    const toast = useToast()
    // const dispatch = useDispatch()

    // const data = useSelector((state) => state.page.data)

    const [dbData, setdbData] = useState('')
    const [errData, seterrData] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // e.preventDefault()

        axios.get(`http://localhost:8888/employee/search/?q=${data}`)
            .then((res) => {
                console.log(res.data)
                // toast({
                //     title: "Search Error",
                //     description: "You've added a new employee",
                //     status: "success",
                //     duration: 4000,
                //     isClosable: true,
                //     position: "top-right",
                // });
                // dispatch(setPage({ data: 'res.data' }))
                // console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Search Error",
                    description: "You've added a new employee",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
    }



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box mt={3} p={7} borderRadius={'12px'} style={{ border: '2px solid #9B3922' }}>
                    <Text fontSize={'lg'} textAlign={'center'}>Edit employee details</Text>
                    <Flex>
                        <Input type='name'
                            placeholder='search employee'
                            ml={6}
                            pl={4}
                            mr={6}
                            mt={6}
                            {...register('search')}
                            variant={'flushed'}
                            focusBorderColor='black'
                        />
                        <Button bg='#F2613F' mt='6' type='submit'>Search Employee</Button>

                    </Flex>
                </Box>
            </form>

            {dbData.length > 0 ?
                <TableContainer mt={8}>
                    <Table colorScheme='teal'>
                        <Thead>
                            <Tr color={'white'}>
                                <Th>employee Name</Th>
                                <Th>Description</Th>
                                <Th isNumeric>Price</Th>
                            </Tr>
                        </Thead>
                        {dbData.map(data => (
                            <Tbody>
                                <Tr>
                                    <Td>{data.employees_name}</Td>
                                    <Td>{data.description}</Td>
                                    <Td isNumeric>{data.price}</Td>
                                </Tr>
                            </Tbody>
                        ))}
                    </Table>
                </TableContainer>
                : <Center mt={8}>
                    <Text>No employees to display</Text>
                </Center>}


        </>
    )
}
