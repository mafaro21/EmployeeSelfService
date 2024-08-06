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
    Skeleton,
    Stack
} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
// import { setPage } from '../../state/ProductPage'
// import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { EditIcon } from '@chakra-ui/icons'

export default function Edit() {
    const toast = useToast()
    // const dispatch = useDispatch()

    // const data = useSelector((state) => state.page.data)

    const [dbData, setdbData] = useState('')
    const [date, setDate] = useState('')
    const [errData, seterrData] = useState('')
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm()



    const onSubmit = async (data) => {
        setdbData('')
        setLoading(true)
        axios.post('http://localhost:8888/employee/search', data)
            .then((res) => {
                setdbData(res.data)

                toast({
                    title: "Search Complete",
                    // description: "You've added a new employee",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Search Error",
                    description: "Record may not exist",
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Center>
                    <Box w={'60%'} mt={3} p={7} borderRadius={'12px'} style={{ border: '2px solid #9B3922' }}>
                        <Text fontSize={'lg'} textAlign={'center'}>search employee </Text>
                        <Flex flexDirection={{ base: 'column', md: 'row' }}>
                            <Input type='name'
                                placeholder='search employee'
                                ml={{ base: 0, md: 6 }}
                                pl={4}
                                mr={6}
                                mt={6}
                                {...register('search')}
                                variant={'flushed'}
                                focusBorderColor='#F63'
                            />
                            <Button bg='#F2613F' mt='6' type='submit'>Search Employee</Button>

                        </Flex>
                    </Box>
                </Center>
            </form>

            {loading ?
                <Center>
                    <Stack mt={16} w={'90%'} spacing={4}>
                        <Skeleton height={'18px'} fadeDuration={4} />
                        <Skeleton height={'18px'} fadeDuration={4} />
                    </Stack>
                </Center>
                :
                dbData.length > 0 ?
                    <TableContainer mt={16} borderTop={'1px solid white'} >
                        <Table colorScheme='teal' >
                            <Thead>
                                <Tr color={'white'}>
                                    <Th>First Name</Th>
                                    <Th>Last Name</Th>
                                    <Th>National ID</Th>
                                    <Th>Gender</Th>
                                    <Th>Employment Status</Th>
                                    <Th>Date of Engagement</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            {dbData.map(data => (
                                <Tbody>
                                    <Tr>
                                        <Td>{data.first_name}</Td>
                                        <Td>{data.last_name}</Td>
                                        <Td>{data.national_id}</Td>
                                        <Td>{data.gender}</Td>
                                        <Td>{data.status_of_employment}</Td>
                                        <Td>{new Date(data.join_date).toLocaleDateString()}</Td>
                                        <Td><EditIcon /></Td>
                                    </Tr>
                                </Tbody>
                            ))}
                        </Table>
                    </TableContainer>
                    : <Center mt={8}>
                        <Text>No employees to display</Text>
                    </Center>
            }


        </>
    )
}
