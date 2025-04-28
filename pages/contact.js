import {Container, List, ListItem, Box, Heading,Link, Button} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin, IoCameraSharp   } from 'react-icons/io5'


const Contact = () => {
    return (
    <Layout>
      <Container>

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

                <ListItem>
                  <Link href="https://vsco.co/pedrohna/gallery" target="_blank">
                    <Button variant="ghost" colorScheme="purple" leftIcon={<IoCameraSharp   />}> @pedrohna  </Button>
                  </Link>
                </ListItem>

              </List>
            </Section>

            <Section delay={0.3} >

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

export default Contact 