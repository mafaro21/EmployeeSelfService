import { React, useState } from 'react'
import {
    Box, Container, Text, Center, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Badge,
    CloseButton,
    Spacer,
    Button,
    useDisclosure,
    Flex,
} from '@chakra-ui/react'
import '../App.css'
import Test from './Reject.jsx'
import AdminNavbar from './AdminNavbar.jsx'
import AppTest from './Approve.jsx'
export default function Decision() {
    const [reject, setReject] = useState(false)
    const [approve, setApprove] = useState(false)

    const User = [
        { first: 'Chipo', last: 'Ndudzo', Dep: 'Admin', DaysReq: '12', DaysAway: '15 Oct - 24 Oct', DateReq: '15 Oct 2023', Status: 'Pending' },
        { first: 'Chipo', last: 'Ndudzo', Dep: 'Admin', DaysReq: '12', DaysAway: '05 Oct - 24 Oct', DateReq: '15 Oct 2023', Status: 'Approved' },
        { first: 'Chipo', last: 'Ndudzo', Dep: 'Admin', DaysReq: '12', DaysAway: '15 Oct - 24 Oct', DateReq: '15 Oct 2023', Status: 'Rejected' }


    ]
    return (
        <>
            <AdminNavbar />

            <Container maxW='container.xxl' >

                <Box>
                    <Center mt='9'>
                        <Text fontSize="3xl">
                            Approvers Dashboard
                        </Text>
                    </Center>

                    <TableContainer style={{ borderRadius: '1px solid black' }} mt='5'>
                        <Table variant='striped' colorScheme='teal'>
                            <Thead>
                                <Tr>
                                    <Th>First Name</Th>
                                    <Th>Last Name</Th>
                                    <Th>Department</Th>
                                    <Th>Days Requested</Th>
                                    <Th>Dates Away</Th>
                                    <Th>Date of Request</Th>
                                    <Th>Decision</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {User.map((user) => (

                                    <Tr>
                                        <Td>{user.first}</Td>
                                        <Td>{user.last}</Td>
                                        <Td>{user.Dep}</Td>
                                        <Td>{user.DaysReq}</Td>
                                        <Td>{user.DaysAway}</Td>
                                        <Td>{user.DateReq}</Td>
                                        <Td>
                                            <Flex>
                                                {!approve ?
                                                    <AppTest approve={approve} setApprove={setApprove} />
                                                    :
                                                    <Badge colorScheme='green' variant='solid' fontSize='xs'>Approved</Badge>
                                                }

                                                {!reject ?
                                                    <Test reject={reject} setReject={setReject} />
                                                    :
                                                    <Badge colorScheme='red' variant='solid' fontSize='xs'>Rejected</Badge>
                                                }

                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    )
}
