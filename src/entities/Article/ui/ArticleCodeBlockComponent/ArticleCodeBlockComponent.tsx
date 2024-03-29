import { cn } from 'shared/lib/classNames';
import { Code } from 'shared/ui/Code';
import { useTheme } from 'app/providers/ThemeProvider';
import { useCallback } from 'react';
import { toastSuccess } from 'app/providers/ToastProvider';
import { useTranslation } from 'react-i18next';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/atricle';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation('article');

  const { className, block } = props;

  const onAfterCopy = useCallback(() => {
    toastSuccess(t('Код скопирован'), { autoClose: 700, position: 'bottom-center' });
  }, [t]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={cn(styles.ArticleCodeBlock, [className])}>
      <Code theme={theme} afterCopy={onAfterCopy}>
        {block.code}
      </Code>
    </div>
  );
};
