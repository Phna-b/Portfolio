import {Container,   Box, Heading, Image, useColorModeValue, Link, Button, Text} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import {BioSection, BioYear} from '../components/bio'
import { useTranslation } from 'react-i18next';


const Page = () => {
  const { t } = useTranslation();
    return (
    <Layout>
      <Container>
                  
 

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-tittle">
                    Pedro Nunes
                    </Heading>
                    <p>{t('titulo')}</p>
                </Box>

                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                        <Box borderColor="whiteAlpha.800" borderWidth={4} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
                                <Image src="/images/PedroIcon.jpg" alt="Profile image" width="100" height="010" />
                        </Box>
                 </Box>
            </Box>

            <Box   border="20px solid" borderColor="transparent" > 
              <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  {t('apresentacao')}
              </Box>
            </Box>
 
            <Section delay={0.1}>
              <Heading as="h3" variant="section-title"> {t('trabalho')}</Heading> 
              <Paragraph>
              {t('resumoTrabalho')}
              </Paragraph> 
               
              <Box align="center" my={4}>
                    <Button as={NextLink} href="/works" scroll={false}  colorScheme="purple" align="center">
                      {t('meuPorfolio')}
                    </Button>
              </Box>
            </Section>

            <Section delay={0.2}>

                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioSection>
                    <BioYear>2001</BioYear>{t('nascidoEm')} Belo Horizonte/MG, Brasil.
                </BioSection>

                <BioSection>
                    <BioYear>2019 {t('atePresente')}</BioYear>{t('curso')} - UFOP
                </BioSection>

                <BioSection>
                    <BioYear>2022 - 2023</BioYear>{t('cargo1')} - iT.eam
                </BioSection>
                <BioSection>
                    <BioYear>2023 - 2024</BioYear>{t('cargo2')} - iT.eam
                </BioSection>
                <BioSection>
                    <BioYear>2024 {t('atePresente')}</BioYear>{t('cargo3')} - iT.eam
                </BioSection>

            </Section>

            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                {t('interesses')}
              </Heading>
              <Paragraph>
                {t('interessesDescricao')}{' '}
                <Link href="https://vsco.co/pedrohna/gallery" target="_blank">{t('fotos')}</Link>.
              </Paragraph>
            </Section>

    </Container>
  </Layout>
  )
}

export default Page 