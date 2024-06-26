import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const alertGoodMessage = (message) => toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light"
});

export const alertBadMessage = (message) => toast.error(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true, 
    progress: undefined,
    theme: "light"
});