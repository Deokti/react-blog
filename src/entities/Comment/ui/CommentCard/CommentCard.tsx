import { cn } from 'shared/lib/classNames';
import { Avatar, AvatarVariant } from 'shared/ui/Avatar';
import {
  Text,
  TextSize,
  TextTag,
  TextTheme,
  TextWeight,
} from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment } = props;

  if (!comment) return null;

  return (
    <div className={cn(styles.CommentCard, [className])}>
      <header className="d-flex align-center">
        <Avatar
          size={24}
          variant={AvatarVariant.ROUNDED}
          className="mr-10"
        >
          {comment.user.username[0]}
        </Avatar>
        <Text
          weight={TextWeight.BOLD}
          tag={TextTag.SPAN}
          className="mr-10"
        >
          {comment.user.username}
        </Text>
        <Text
          size={TextSize.SM}
          tag={TextTag.SPAN}
          theme={TextTheme.SECONDARY}
        >
          {comment.createdAt}
        </Text>
      </header>

      <Text className="mt-10">
        {comment.text}
      </Text>
    </div>
  );
};
