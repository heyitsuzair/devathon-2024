"use server"
import { constants } from "@/config"
import { supabase } from "@/lib"

export const addQuestions = async({test_name, questions, options, corectOption, image, category})=>{
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
            return {
                success: false,
                data: constants.ERROR[400]
            }
        }
        return {
            success: true,
            data: constants.SUCCESS.MESSAGE_SENT
        }
    }catch(e){
        console.error(e)
        return {
            success: false,
            data: constants.ERROR[500],
        }
    }
}

export const getQuestions = async () => {
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