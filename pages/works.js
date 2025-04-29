import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import iconJC from '../public/images/iconJC.jpg'
import farofa8 from '../public/images/8.png'
import tpthumb from '../public/images/tpThumb.png'
import { useTranslation } from 'react-i18next';



  
const Works = () => {
  const { t } = useTranslation();
  return(
  <Layout title="Works">
    <Container>
      
    <Section delay={0.2}>

      <Heading as="h3" fontSize={20} mb={4}>
       {t('trabalho')}
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sisweb" title={t('sisweb')} thumbnail={tpthumb}>
            {t('siswebDescricao')}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="cifra" title={t('cifra')} thumbnail={iconJC}>
            {t('cifraDescricao')}
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Section>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          {t('colaboracoes')}
        </Heading>


        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="farofa" title="farofa" thumbnail={farofa8}>
            {t('farofa')}
          </WorkGridItem>
        </Section>
 
      </SimpleGrid>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
 
        </Section>
      </SimpleGrid>
 
    </Container>
  </Layout>)
}

export default Works
 