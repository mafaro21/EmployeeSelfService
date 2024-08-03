import {
    Box, Flex,
    useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Add from './Add'
import Edit from './Edit'
import Remove from './Remove'

export default function Employee() {
    const [page, setPage] = useState('add')

    return (
        <>
            <AdminNavbar />
            <Box color={'white'} className="admin-bg">
                <Flex>

                    <Flex flex="1" direction="column" p={{ base: 2, md: 9 }} >
                        {/* add container */}
                        <Flex w='100%' p={{ base: 3, md: 8 }} justifyContent={'space-around'}>
                            <Box
                                border={page === 'add' ? '2px solid #F2613F' : '3px solid black'}
                                w={{ base: '60%', md: '30%' }}
                                p='4'
                                mx={1}
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={{ base: '15px', md: '17px' }}
                                // onClick={() => dispatch(setPage({ page: 'add' }))}
                                onClick={() => setPage('add')}
                                _hover={{ cursor: 'pointer' }}
                            >
                                Add Employee
                            </Box>

                            <Box
                                border={page === 'edit' ? '2px solid #F2613F' : '3px solid black'}
                                w={{ base: '60%', md: '30%' }}
                                p='4'
                                mx={1}
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={{ base: '15px', md: '17px' }}
                                // onClick={() => dispatch(setPage({ page: 'edit' }))}
                                onClick={() => setPage('edit')}
                                _hover={{ cursor: 'pointer' }}>
                                Edit Employee
                            </Box>

                            <Box
                                border={page === 'remove' ? '2px solid #F2613F' : '3px solid black'}
                                w={{ base: '60%', md: '30%' }}
                                p='4'
                                mx={1}
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={{ base: '15px', md: '17px' }}
                                // onClick={() => dispatch(setPage({ page: 'remove' }))}
                                onClick={() => setPage('remove')}
                                _hover={{ cursor: 'pointer' }}>
                                Remove Employee
                            </Box>
                        </Flex>

                        {page === 'add' ? <Add /> : ''}
                        {page === 'edit' ? <Edit /> : ''}
                        {page === 'remove' ? <Remove /> : ''}
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
