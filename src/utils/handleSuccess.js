import { constants } from "@/config";

export default (code = "GENERIC", payload = null) => {
  return {
    success: true,
    data: constants.SUCCESS[code],
    payload,
  };
};
