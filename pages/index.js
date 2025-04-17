import {Container, Box, Heading} from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Olá, sou desenvolvedor back-end e especialista em IBM MAXIMO do Brasil!
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-tittle">
                Pedro Nunes
                </Heading>

                <p> Consultor IBM MAXIMO / Desenvolvedor / Graduando em Sistemas de Informação </p>
            </Box>
            </Box>
        </Container>
 
    )
}

export default Page 