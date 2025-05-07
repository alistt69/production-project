import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.error_page, {}, [className])}>{t('Page not found')}</div>
  );
};
