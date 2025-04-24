import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Pedro Nunes - Homepage</title>
                <link rel="shortcut icon" href="/images/favIcon.png" />
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main