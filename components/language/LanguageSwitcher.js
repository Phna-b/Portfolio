import { Button, HStack } from '@chakra-ui/react';
import i18n from './i18n';

export default function LanguageSwitcher() {

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
