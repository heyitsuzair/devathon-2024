import { constants } from "@/config";

export default (code) => {
  return {
    success: false,
    data: constants.ERROR[code],
  };
};
