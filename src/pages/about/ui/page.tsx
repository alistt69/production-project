import { useTranslation } from 'react-i18next';
import { Counter } from '../../../entities/couter';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('About page')}
      <Counter />
    </div>
  );
};

export default AboutPage;
