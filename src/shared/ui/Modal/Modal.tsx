import { useTheme } from 'app/providers/ThemeProvider';
import React, {
  FC, useEffect, useRef, useState, useCallback,
} from 'react';
import { cn } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import styles from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  isOpen?: boolean
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const [isClosing, isSetClosing] = useState<boolean>(false);
  const { theme } = useTheme();

  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const closeHandler = useCallback(() => {
    if (onClose) {
      isSetClosing(true);

      timer.current = setTimeout(() => {
        onClose();
        isSetClosing(false);
      }, 300);
    }
  }, [onClose]);

  const handlerOverlay = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback((event: any) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timer.current);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown, timer]);

  const mods = {
    [styles.isOpen]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={cn(`${styles.modal}`, mods, [theme, className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={handlerOverlay}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
