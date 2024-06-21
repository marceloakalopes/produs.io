import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createAdminClient } from "@/utils/supabase/admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sig = req.headers.get("Stripe-Signature");

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      // console.log("Email from metadata: ", session.metadata?.email);

      const supabase = createAdminClient();

      // Updating user record
      const { data, error } = await supabase
        .from('Users') // Ensure this is the correct table name
        .update({ plus: 'true' })
        .eq('email', session.metadata?.email);

        console.log("Data: ", data);

      if (error) {
        // console.error(`⚠️ Supabase update failed: ${error.message}`);
        return NextResponse.json({ error: `Supabase Error: ${error.message}` }, { status: 500 });
      }

      // console.log(`✅ User with email ${session.metadata?.email} is now subscribed.`);

      return NextResponse.json({ status: "success", event: event.type });
    }

    // Respond 200 to acknowledge receipt of the event
    return NextResponse.json({ status: "received", event: event.type });
  } catch (err: any) {
    // console.error(`⚠️ Webhook Error: ${err.message}`);
    return NextResponse.json({ status: "failed", error: err.message }, { status: 400 });
  }
}
