import { toast, ToastOptions } from 'react-toastify';

export const toastSuccess = (text: string, options?: ToastOptions) => {
  toast.success(text, options);
};
