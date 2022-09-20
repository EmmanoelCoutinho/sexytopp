import { toast } from 'react-toastify';

interface NotificationProps {
  message: any;
}

function notification(message: NotificationProps) {
  toast(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
}

export default notification;
