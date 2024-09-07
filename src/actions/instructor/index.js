"use server"
import { constants } from "@/config"
import { supabase } from "@/lib"

export const addTest = async({image, test_name, category, status, price, instructorId})=>{
    try{
        const {error} = await supabase
            .from("tests")
            .insert([{
                test_name,
                image,
                category,
                status,
                price
            }])
            .eq("instructor_id" ,instructorId);
    
        if(error){
            console.error(error.message, "client error while adding test")
            return {
                success: false,
                data: constants.ERROR[400]
            }
        }
        console.log("tests added successfully")
        return {
            success: true,
            data: constants.SUCCESS.MESSAGE_SENT
        }
    }catch(e){
        console.error(e, "error adding the test")
        return {
            success: false,
            data: constants.ERROR[500],
        }
    }
}

export const getTests = async ({instructorId}) => {
    try {
        const { data, error } = await supabase
            .from("tests")
            .select("*")
            .eq("instructor_id" ,instructorId);

        if (error) {
            console.error(error.message, "client side error");
            return {
                success: false,
                error: error.message
            };
        }
        console.log("test loaded successfully")
        return {
            success: true,
            data
        };
    } catch (e) {
        console.error(e, "error while getting tests");
        return {
            success: false,
            error: e.message
        };
    }
};

export const addQuestion = async({options, correctOptions, question, testId})=>{
    try{
        const {error} = await supabase
            .from("questions")
            .insert([{
                question,
                options,
                correctOptions,
            }])
            .eq("test_id", testId);
    
        if(error){
            console.error(error.message, "error while adding new questions, client side error")
            return {
                success: false,
                data: constants.ERROR[400]
            }
        }
        console.log("question added successfully")
        return {
            success: true,
            data: constants.SUCCESS.MESSAGE_SENT
        }
    }catch(e){
        console.error(e, "error while adding the question, server error: ")
        return {
            success: false,
            data: constants.ERROR[500],
        }
    }
}

export const getQuestion = async ({testId}) => {
    try {
        const { data, error } = await supabase
            .from("questions")
            .select("*")
            .eq("test_id", testId);

        if (error) {
            console.error(error.message, "client side error");
            return {
                success: false,
                error: error.message
            };
        }
        console.log("questions loaded successfully")
        return {
            success: true,
            data
        };
    } catch (e) {
        console.error(e, "error while getting the question server error");
        return {
            success: false,
            error: e
        };
    }
};

