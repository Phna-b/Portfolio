import {Container, List, ListItem, Box, Heading, Image, useColorModeValue, Link, Button} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import {BioSection, BioYear} from '../components/bio'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin  } from 'react-icons/io5'


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
              <Paragraph>
                Teste teste teste
                exemplo de link{' '}
                <Link as={NextLink} href="/works/link" passHref scroll={false}>
                    Link
                </Link>
                </Paragraph> 
               
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

            <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/phna-b" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @phna-b
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/phnunesa/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin  />}
              >
                @phnunesa  
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                @bla  
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="purple"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>


        </Container>
 
    )
}

export default Page 