import { constants } from "@/config";
import { supabase } from "@/lib";

export default function (handler) {
  return async (data) => {
    const { error, data: dataInstructor } = await supabase
      .from(constants.TABLES.INSTRUCTORS)
      .select("*")
      .eq("email_address", data.email_address)
      .single();

    if (!dataInstructor) {
      return {
        success: false,
        data: constants.ERROR.BAD_CREDENTIALS,
      };
    }

    data.instructor = { ...dataInstructor };

    return handler(data);
  };
}
