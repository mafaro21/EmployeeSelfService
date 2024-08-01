import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loader() {
    return (
        <>
            <Box pt={4}>
                <Spinner
                    color="#FF6201"
                    p={4}
                    thickness="3px"
                    speed="0.85s"
                // emptyColor="gray.300"
                />
            </Box>
        </>
    )
}
