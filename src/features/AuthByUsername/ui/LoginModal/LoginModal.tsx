import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { PageLoader } from 'widgets/PageLoader';
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
      <Suspense fallback={<PageLoader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
