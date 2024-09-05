import { toast } from "react-hot-toast";
import toBase64 from "./toBase64";
import { constants } from "@/config";

// Define the maximum file size (e.g., 2 MB)
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes

export default async (setFieldValue, setFieldTouched, e) => {
  const file = e?.target?.files?.[0];

  if (!file) return;

  // Check if file size exceeds the maximum allowed size
  if (file.size > MAX_FILE_SIZE) {
    toast.remove();
    toast.error(constants.ERROR.MAX_FILE_SIZE_EXCEEDED);
    // You can also set an error state or show an error message here if needed
    return;
  }

  try {
    const base64 = await toBase64(file);

    if (setFieldTouched) setFieldTouched(e.target.name, true);
    if (setFieldValue) setFieldValue(e.target.name, base64);
  } catch (error) {
    console.error("Error converting file to Base64:", error);
    // Handle conversion error here if needed
  }
};
