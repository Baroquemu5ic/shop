"use server"


export async function submitEmailAction(prevState: any, formData: FormData) {

    const formObj = {
        username: formData.get('username'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        usermessage: formData.get('usermessage')
    }

    const { error } = await sendEmail()

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


/**
 * use resend API & dump data into Supabase
 */

async function sendEmail() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')

 
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        
        return {}

    } catch (err: any) {
        return {
            error: err
        }
    }
}

