import { constants } from "@/config";
import { supabase } from "@/lib";

export default function (handler) {
  return async (data) => {
    const { error, data: dataAdmin } = await supabase
      .from(constants.TABLES.ADMIN)
      .select("*")
      .eq("email", data.email_address)
      .single();

    if (error) {
      return {
        success: false,
        data: constants.ERROR.BAD_CREDENTIALS,
      };
    }

    data.admin = { ...dataAdmin };

    return handler(data);
  };
}
