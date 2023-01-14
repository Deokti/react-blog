/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { cn } from 'shared/lib/classNames';
import {
  Text, TextSize, TextTag, TextTheme, TextWeight,
} from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from 'react-textarea-autosize';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { getCommentFormValue } from '../../model/selectors/getCommentFormValue/getCommentFormValue';
import styles from './AddCommentForm.module.scss';
import { commentFormActions, commentFormReducer } from '../../model/slice/loginSlice';

const reducers: ReducersList = {
  articleCommentForm: commentFormReducer,
};

interface AddCommentFormProps {
  className?: string;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const value = useSelector(getCommentFormValue);
  const dispatch = useAppDispatch();

  const onChangeValue = useCallback(
    (value: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(commentFormActions.setValue(value.target.value));
    },
    [dispatch],
  );

  const onSendMessage = useCallback(() => {
    if (value.length > 0) {
      alert(`SEND MESSAGE: ${value}`);
    }
  }, [value]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLFormElement>) => {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        onSendMessage();
      }
    },
    [onSendMessage],
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSendMessage();
    },
    [onSendMessage],
  );

  const isDisabled = useMemo(() => Boolean(value?.length === 0), [value]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <form
        className={cn(styles.addCommentForm, [className])}
        onKeyDown={onKeyDown}
        onSubmit={onSubmit}
      >
        <Text weight={TextWeight.BOLD}>{t('Ваш комментарий')}</Text>
        <TextareaAutosize className={styles.textarea} onChange={onChangeValue} />

        <div className={styles.footer}>
          <Button
            theme={ButtonTheme.PRIMARY}
            className={styles.button}
            disabled={isDisabled}
            type="submit"
          >
            {t('Отправить')}
          </Button>

          <Text
            size={TextSize.SM}
            tag={TextTag.SPAN}
            weight={TextWeight.LIGHT}
            theme={TextTheme.SECONDARY}
          >
            {t('SHIFT + ENTER')}
          </Text>
        </div>
      </form>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
