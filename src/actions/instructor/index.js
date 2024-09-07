"use server"
import { supabase } from "@/lib"

export const addTest = async({test_name, questions, options, corectOption, image, category})=>{
    try{
        const {error} = supabase
            .from("questions")
            .insert([{
                test_name,
                questions,
                options,
                corectOption,
                image,
                category,
            }])
    
        if(error){
            console.error(error.message)
        }
        return {
            success: true
        }
    }catch(e){
        console.error(e)
        return {
            success: false,
        }
    }
}

export const getTest = async () => {
    try {
        const { data, error } = await supabase
            .from("questions")
            .select("*");

        if (error) {
            console.error(error.message);
            return {
                success: false,
                error: error.message
            };
        }

        return {
            success: true,
            data
        };
    } catch (e) {
        console.error(e);
        return {
            success: false,
            error: e.message
        };
    }
};