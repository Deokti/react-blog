import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children?: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => (
  <>
    {children}
    {/* eslint-disable-next-line i18next/no-literal-string */}
    <ToastContainer autoClose={2000} />
  </>
);
