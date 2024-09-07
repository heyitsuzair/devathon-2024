import { constants } from "@/config";
import { supabase } from "@/lib";

export default function (handler) {
  return async (data) => {
    const { error, data: dataStudent } = await supabase
      .from(constants.TABLES.STUDENTS)
      .select("*")
      .eq("email_address", data.email_address)
      .single();

    if (!dataStudent) {
      return {
        success: false,
        data: constants.ERROR.BAD_CREDENTIALS,
      };
    }

    data.student = { ...dataStudent };

    return handler(data);
  };
}
