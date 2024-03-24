"use server";

import { sendEmail, sendEmailProps } from "@/lib/server/send-email";
import { sendRegister, sendRegisterProps } from "@/lib/server/send-register";

export async function submitEmailAction(prevState: any, formData: FormData) {
  const formObj = {
    username: formData.get("username"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    usermessage: formData.get("usermessage"),
  };

  const { error } = await sendEmail(formObj as sendEmailProps);

  if (error) {
    return {
      success: false,
      error: true,
      message: "Failure! please try again!",
    };
  }

  return {
    success: true,
    error: false,
    message: "Success!",
  };
}

export async function submitRegisterAction(prevState: any, formData: FormData) {
  const formObj = {
    studentName: formData.get("studentName"),
    studentAge: formData.get("studentAge"),
    course: formData.get("course"),
    typeOfCourse: formData.get("typeOfCourse"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  };

  const { error } = await sendRegister(formObj as sendRegisterProps);

  if (error) {
    return {
      success: false,
      error: true,
      message: "Failure! please try again!",
    };
  }

  return {
    success: true,
    error: false,
    message: "Success!",
  };
}
