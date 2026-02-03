import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium px-2"
    >
      {i18n.language === 'en' ? '日本語' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
