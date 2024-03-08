"use server";

import EmailFromCustomer from "@/components/emails/email-from-customer";
import { Resend } from "resend";
import { pushMailDataToDb } from "@/lib/supabase/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface sendRegisterProps {
  studentName: string;
  studentAge: string;
  course: string;
  typeOfCourse: string;
  email: string;
  phone: string;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const EMAIL_SUBJECT_PREFIX = "[Baroque Music Customer Mail]-REGISTER:";

export async function sendRegister(payload: any) {
  console.log("sendRegister payload \n", payload);

  try {
    if (!ADMIN_EMAIL) {
      return { error: "ADMIN_EMAIL is not configured" };
    }

    const { data } = await resend.emails.send({
      from: ADMIN_EMAIL, // admin mailer - this has to be your DOMAIN email (@baroquemusic.in)
      to: ADMIN_EMAIL, // this has to be your DOMAIN email (@baroquemusic.in)
      reply_to: payload.email, // this is needed to reply to the customer on the mail trail
      subject: `${EMAIL_SUBJECT_PREFIX} ${payload.subject}`,
      react: EmailFromCustomer(payload),
    });

    const resendMailId = data?.id;

    if (resendMailId) {
      console.log(
        `NextJS-Server: sendRegister: RESEND success: ID: ${resendMailId}`
      );
      // dump the mail details into supabase

      //   const dbResult = await pushMailDataToDb({
      //     resend_id: resendMailId,
      //     customer_email: payload.email,
      //     customer_name: payload.username,
      //     email_subject: payload.subject,
      //     email_body: payload.usermessage,
      //     target_email: ADMIN_EMAIL,
      //   });

      //   if (dbResult?.success === true) {
      //     console.log(
      //       `NextJS-Server:sendRegister: SUPABASE success ID: ${resendMailId}`
      //     );
      //   } else if (dbResult?.error === true) {
      //     console.log(
      //       `NextJS-Server:sendRegister: SUPABASE failure ID: ${resendMailId}`
      //     );
      //   }
    } else {
      console.log("NextJS-Server:sendRegister: NO resendMailId");
    }

    return { data };
  } catch (error) {
    return { error };
  }
}
