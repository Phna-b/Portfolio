import {Container, Box, Heading, Image, useColorModeValue, Link} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
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


            <Section delay={0.1}>
              <Heading as="h3" variant="section-title">Work</Heading> 
              <Paragraph>Paragraph</Paragraph> 
               
            </Section>
        </Container>
 
    )
}

export default Page 