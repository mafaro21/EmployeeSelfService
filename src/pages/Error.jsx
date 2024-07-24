import React from 'react'
import '../css/Login.css'
import '../App.css'
import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Error() {
    return (
        <>
            <Box className='bg-error'>
                <Box pt={39}>
                    <Text fontSize='4xl' as='b'>Looking for something?</Text>
                </Box>

                <Center pt='5'>
                    <Box >
                        <Image
                            src='https://s3media.angieslist.com/s3fs-public/looking-under-couch.jpeg?impolicy=leadImage'
                            // src='https://media.istockphoto.com/id/171368786/photo/evil-eyes.jpg?s=612x612&w=0&k=20&c=bFPgcg7h1U7pRDGBD4rhgxUq5tc6ax7F-XGQSfyyz8Y='
                            borderRadius='130px'
                            className='img-error'
                        />
                    </Box>
                </Center>

                <Box pt='3'>
                    <Link to={'/'}>
                        <Button
                            colorScheme='yellow'
                            rightIcon={<ArrowForwardIcon />}>
                            Click here to go back home
                        </Button>
                    </Link>

                </Box>
            </Box>
        </>



    )
}
