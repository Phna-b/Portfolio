import { Button, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HStack spacing={4}  borderRight="20px solid" borderColor="transparent"  >
      <Button onClick={() => changeLanguage('pt')} colorScheme="purple" size="xs">
        Português
      </Button>      
      <Button onClick={() => changeLanguage('en')} colorScheme="teal" size="xs">
        English
      </Button>

    </HStack>
  );
}
