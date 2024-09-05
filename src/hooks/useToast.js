import toast from "react-hot-toast";

const useToast = () => {
  const showSuccessMessage = (message) => {
    toast.remove();

    toast.success(message);
  };

  const showErrorMessage = (message) => {
    toast.remove();

    toast.error(message);
  };

  return { showErrorMessage, showSuccessMessage };
};

export default useToast;
