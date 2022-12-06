import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazyLoad>
      <Suspense fallback="">
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
