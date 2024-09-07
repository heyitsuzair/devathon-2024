"use server";

import { constants } from "@/config";
import { supabase } from "@/lib";
import { isStudentLoggedIn } from "@/middlewares";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SK);

async function buyTest(testID, student) {
  try {
    // Fetch the test details from the database
    const { data: dataTest, error: errorTest } = await supabase
      .from(constants.TABLES.TESTS)
      .select("*")
      .eq("id", testID)
      .single();

    if (errorTest || !dataTest) {
      console.log("Error fetching test:", errorTest || "Test not found");
      return {
        success: false,
        data: constants.ERROR[400],
      };
    }

    // Create a Stripe Checkout Session for the test
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // Set the currency
            product_data: {
              name: dataTest.test_name, // Use the test name
            },
            unit_amount: Math.round(dataTest.price * 100), // Stripe expects the price in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/test/attempt/1?success=true`, // Success redirect URL
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?success=false`, // Cancel redirect URL
      customer_email: student.email, // Send receipt to student's email
    });

    // Redirect user to the Stripe Checkout
    return {
      success: true,
      data: session.url,
    };
  } catch (error) {
    console.log("Error creating Stripe session:", error.message);
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}

export default isStudentLoggedIn(buyTest);
