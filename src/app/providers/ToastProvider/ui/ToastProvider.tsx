import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children?: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => (
  <>
    {children}
    <ToastContainer />
  </>
);