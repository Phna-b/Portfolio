import {Container, List, ListItem, Box, Heading, Image, useColorModeValue, Link, Button} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import {BioSection, BioYear} from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin  } from 'react-icons/io5'


const Page = () => {
    return (
    <Layout>
      <Container>


            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-tittle">
                    Pedro Nunes
                    </Heading>
                    <p> Consultor IBM MAXIMO / Desenvolvedor / Graduando em Sistemas de Informação </p>
                </Box>

                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                        <Box borderColor="whiteAlpha.800" borderWidth={4} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
                                <Image src="/images/Pedro2.jpg" alt="Profile image" width="100" height="100" />
                        </Box>
                 </Box>
            </Box>

            <Box   border="20px solid" borderColor="transparent" > 
              <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  Olá, sou desenvolvedor back-end e especialista em IBM MAXIMO do Brasil!
              </Box>
            </Box>
            
            <Section delay={0.1}>
              <Heading as="h3" variant="section-title">Work</Heading> 
              <Paragraph>
              Atuo como consultor IBM Maximo em Belo Horizonte - MG, e estou finalizando minha graduação em Sistemas de Informação pela Universidade Federal de Ouro Preto. Resolver problemas e desvendar desafios é algo que realmente me motiva — é isso que me faz evoluir constantemente.
              No meu portfólio, você vai encontrar projetos tanto na área de desenvolvimento de software quanto em manutenção de hardware.
              </Paragraph> 
               
              <Box align="center" my={4}>
                    <Button as={NextLink} href="/works" scroll={false}  colorScheme="purple" align="center">
                        Meu portfolio
                    </Button>
              </Box>
            </Section>

            <Section delay={0.2}>

                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioSection>
                    <BioYear>2001</BioYear>Nascido em Belo Horizonte, Brasil.
                </BioSection>

                <BioSection>
                    <BioYear>2019 até o presente</BioYear>Sistemas de Informação - UFOP
                </BioSection>

                <BioSection>
                    <BioYear>2022 - 2023</BioYear>Estágiario - iT.eam
                </BioSection>
                <BioSection>
                    <BioYear>2023 - 2024</BioYear>Consultor Júnior - iT.eam
                </BioSection>
                <BioSection>
                    <BioYear>2024 até o presente</BioYear>Consultor Pleno - iT.eam
                </BioSection>

            </Section>

            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                Interesses pessoais
              </Heading>
              <Paragraph>
                Consertar aparelhos eletrônicos, treinos de força, futebol americano, artes marciais e de vez em quando umas{' '}
                <Link href="https://vsco.co/pedrohna/gallery" target="_blank">foticas</Link>
              </Paragraph>
            </Section>

            <Section delay={0.3}>
              <Heading as="h3" variant="section-title"> Redes </Heading>

              <List>

                <ListItem>
                  <Link href="https://github.com/phna-b" target="_blank">
                    <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoGithub />} > @phna-b </Button>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="https://www.linkedin.com/in/phnunesa/" target="_blank">
                    <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoLinkedin  />}> @phnunesa  </Button>
                  </Link>
                </ListItem>

              </List>
            </Section>

            <Section delay={0.3}>

              <Heading as="h3" variant="section-title">
                Contato
              </Heading>

              <Paragraph>
                Se você tem uma ideia, um projeto em mente ou tem interesse em discutir sobre soluções técnicas ou parcerias acadêmicas,
                fico à diposição. Entre em contato para colaborações, consultorias, propostas de pesquisa ou apenas para trocar conhecimento!
              </Paragraph>

              <Box align="center" my={4}>
                <Button as={NextLink} href="mailto:phna8589@gmail.com" scroll={false} colorScheme="purple"> <EmailIcon /></Button> 
              </Box>

            </Section>

    </Container>
  </Layout>
  )
}

export default Page 