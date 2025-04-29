import { Button, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HStack spacing={4}>
      <Button onClick={() => changeLanguage('en')} colorScheme="teal" size="sm">
        English
      </Button>
      <Button onClick={() => changeLanguage('pt')} colorScheme="purple" size="sm">
        Português
      </Button>
    </HStack>
  );
}
