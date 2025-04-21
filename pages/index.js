import {Container, Box, Heading, Image, useColorModeValue, Link, Button} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import {BioSection, BioYear} from '../components/bio'
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
                                src="/images/Pedro2.jpg"
                                alt="Profile image"
                                width="100"
                                height="100"/>
                        </Box>
                 </Box>
            </Box>


            <Section delay={0.1}>
              <Heading as="h3" variant="section-title">Work</Heading> 
              <Paragraph>Teste teste teste</Paragraph> 
               
              <Box align="center" my={4}>
              
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="purple"
                        alignContent="center">
                        Meu portfolio
                    </Button>
              </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Nascido em Belo Horizonte, Brasil.
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    UFOP
                </BioSection>
            </Section>

        </Container>
 
    )
}

export default Page 