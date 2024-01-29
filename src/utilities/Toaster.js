import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const success_toaster = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: "dark",
  });
};

export const info_toaster = (message) => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: "dark",
  });
};

export const warning_toaster = (message) => {
  toast.warning(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: "dark",
  });
};

export const error_toaster = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: "dark",
  });
};

export const mini_toaster = (message) => {
  toast(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: "dark",
  });
};
