import { useTheme } from 'app/providers/ThemeProvider';
import React, {
  useEffect, useRef, useState, useCallback, ReactNode,
} from 'react';
import { cn } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import styles from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  isOpen?: boolean
  onClose?: () => void;
  lazyLoad?: boolean;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazyLoad = false,
  } = props;

  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const [isClosing, isSetClosing] = useState<boolean>(false);
  const [isMounted, setIsMounded] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounded(true);
    }
  }, [isOpen]);

  const { theme } = useTheme();

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

  // Если lazyLoad === trye, а isMounted === false
  // то есть компоненты не был вызван, возвращать Null
  if (lazyLoad && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(styles.modal, mods, [theme, className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={handlerOverlay}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
