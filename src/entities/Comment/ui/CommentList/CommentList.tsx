import { cn } from 'shared/lib/classNames';
import {
  Text, TextAlight, TextTag, TextTheme,
} from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments: Comment[];
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation('article');

  if (isLoading) {
    return null;
  }

  if (!comments.length) {
    return (
      <Text
        theme={TextTheme.SECONDARY}
        align={TextAlight.CENTER}
        tag={TextTag.H2}
      >
        {t('Здесь пока нет ни одного комментария, вы можете стать первым!')}
      </Text>
    );
  }

  return (
    <div className={cn(styles.CommentList, [className])}>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
