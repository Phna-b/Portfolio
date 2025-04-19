import {Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Olá, sou desenvolvedor back-end e especialista em IBM MAXIMO do Brasil!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-tittle">
                    Pedro Nunes
                    </Heading>
                    <p> Consultor IBM MAXIMO / Desenvolvedor / Graduando em Sistemas de Informação </p>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center">
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden">
                                <Image
                                src="/images/Pedro.jpg"
                                alt="Profile image"
                                width="100"
                                height="100"/>
                        </Box>
                 </Box>
            </Box>
        </Container>
 
    )
}

export default Page 