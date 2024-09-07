"use server";

import { supabase } from "@/lib";

async function updateInstructorStatus(id, status) {
  try {
    const { data, error } = await supabase
      .from('instructors') 
      .update({ status: status })  
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error.message);
      return {
        success: false,
        message: 'Error updating status',
      };
    }

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error('Error updating status:', error.message);
    return {
      success: false,
      message: 'Error updating status',
    };
  }
}

export default updateInstructorStatus;
