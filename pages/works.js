import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import iconJC from '../public/images/iconJC.jpg'
import farofa8 from '../public/images/8.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="cifra" title="Cifra de César" thumbnail={iconJC}>
            Técnicas de criptografia implementada em Haskell.
          </WorkGridItem>
        </Section>

        
 
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>


        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="farofa" title="farofa" thumbnail={farofa8}>
            de artistas para artistas
          </WorkGridItem>
        </Section>
 
      </SimpleGrid>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
 
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

 
    </Container>
  </Layout>
)

export default Works
 