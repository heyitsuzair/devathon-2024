import { constants } from "@/config";
import { supabase } from "@/lib";

export default function (handler) {
  return async (data) => {
    const { error, data: dataStudent } = await supabase
      .from(constants.TABLES.INSTRUCTORS)
      .select("*")
      .eq("email_address", data.email_address)
      .single();

    if (dataStudent) {
      return {
        success: false,
        data: constants.ERROR.USER_EXISTS,
      };
    }

    return handler(data);
  };
}
