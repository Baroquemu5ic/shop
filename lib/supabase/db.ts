"use server"

import { supabaseClient } from "./client"


interface DBPayload {
    resend_id: string;
    customer_email: string;
    customer_name: string;
    email_subject: string;
    email_body: string;
    target_email: string;
}

export async function pushMailDataToDb(payload: DBPayload) {
    const { data, error } = await supabaseClient
    .from('contact_form_emails')
    .insert([
        { ...payload },
    ])
    .select()

    if (error) {
        return { success: false, error: true }
    }

    if (data) {
        return { success: true }
    }
    
    return { success: false, error: true }
}

