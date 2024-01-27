"use server"

import { sendEmail, sendEmailProps } from "@/lib/server/send-email"


export async function submitEmailAction(prevState: any, formData: FormData) {

    const formObj = {
        username: formData.get('username'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        usermessage: formData.get('usermessage')
    }

    const { error } = await sendEmail(formObj as sendEmailProps)

    if (error) {
        return {
            success: false,
            error: true,
            message: 'Failure! please try again!'
        }
    }


    return {
        success: true,
        error: false,
        message: 'Success!'
    }
}


