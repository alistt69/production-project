import { Modal } from 'shared/ui/modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader';
import { LazyLoginForm } from '../login-form/lazy';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LazyLoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
