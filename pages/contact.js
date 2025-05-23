import {Container, List, ListItem, Box, Heading,Link,useColorModeValue, Button} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin, IoCameraSharp   } from 'react-icons/io5'
import Location from '../components/location'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
    <Layout>
      <Container>

      <Section delay={0.3}>
            
            <Box border="20px solid" borderColor="transparent" > 
              <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  <Location></Location>
              </Box>
            </Box>
              <Heading as="h3" variant="section-title"> {t('redes')} </Heading>

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
              {t('contato')}
              </Heading>

              <Paragraph>
                {t('contatoDescricao')}
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