import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { ButtonTheme, Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={cn(styles.error, [className])}>
      <div className={styles.body}>
        <p className={styles.text}>{t('Непредвиденная ошибка')}</p>
        <Button
          theme={ButtonTheme.ERROR}
          onClick={reloadPage}
        >
          {t('Перезагрузить страницу')}
        </Button>
      </div>
    </div>
  );
};
