import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {Container,Box, Link, Stack, Heading, Flex,  Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

import LanguageSwitcher from './language/LanguageSwitcher'
import { useTranslation } from 'react-i18next';


const LinkItem = ({ href, path, target, children, ...props }) => {

  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link as={NextLink} href={href} scroll={false} p={2} bg={active ? 'grassTeal' : undefined} color={active ? 'purple' : inactiveColor} target={target} {...props}>
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const { t } = useTranslation();

  

  return (

    
    <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} css={{ backdropFilter: 'blur(10px)' }} zIndex={2} {...props} >
      <Container  display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">


       

        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
            <LinkItem href="/works" path={path}>
              {t('trabalho')}
            </LinkItem>

            <LinkItem href="https://drive.google.com/drive/folders/1Q2xtFLpE_2VWL--tzE0zodJSnzk-IOyX?usp=sharing" path={path}>
              {t('certificado')}
            </LinkItem>
            
            <LinkItem href="/contact" path={path}>
              {t('contato')}
            </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/Phna-b/Portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            {t('fonte')}
          </LinkItem>

        </Stack>
         <LanguageSwitcher /> 
        <ThemeToggleButton />

        <Box flex={1} align="right">
          
          
        
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  {t('inicio')}
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                 {t('trabalho')}
                </MenuItem>
                
                <MenuItem as={MenuLink} href="https://drive.google.com/drive/folders/1Q2xtFLpE_2VWL--tzE0zodJSnzk-IOyX?usp=sharing">
                  {t('certificado')}
                </MenuItem>

                <MenuItem as={MenuLink} href="/contact">
                  {t('contato')}
                </MenuItem>

                <MenuItem as={Link} href="https://github.com/Phna-b/Portfolio">
                  {t('fonte')}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar