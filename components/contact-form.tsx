"use client"

import React from "react"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from 'sonner'
import LoadingIndicator from './icons/loading'
import { submitEmailAction } from "../app/actions"

import ContentJson from "@/content.json"

const initialState = {
    success: false,
    error: false,
    message: ''
}

export function ContactForm() {
    const [formState, formAction] =  useFormState(submitEmailAction, initialState)

    React.useEffect(() => {
        if (formState.error === true) {
            toast.error(formState.message)
        }
        if (formState.success === true) {
            toast.success(formState.message)
        }
    }, [formState])


    return (
        <form action={formAction} className="flex flex-col w-full md:w-4/5 lg:w-3/5 rounded-2xl p-8 lg:p-16 backdrop-blur-lg bg-slate-600/30">
            <div className="flex flex-col justify-between gap-y-2 text-xl">
                <label htmlFor="username">{ContentJson.contact.form.username.label}</label>
                <input type="text" required id="username" name="username" className="h-8 text-slate-900" />
            </div>

            <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
                <label htmlFor="email">{ContentJson.contact.form.email.label}</label>
                <input type="email" required id="email" name="email" className="h-8 text-slate-900" />
            </div>

            <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
                <label htmlFor="subject">{ContentJson.contact.form.subject.label}</label>
                <input type="text" required id="subject" name="subject" className="h-8 text-slate-900" />
            </div>

            <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
                <label htmlFor="usermessage">{ContentJson.contact.form.usermessage.label}</label>
                <textarea required rows={10} id="usermessage" name="usermessage" className="text-slate-900 cursor-text" />
            </div>


            <SubmitButton />
        </form>
    )
}


function SubmitButton() {
    const formStatus = useFormStatus()
    const className = "mt-12 p-4 bg-blue-600 hover:opacity-65 rounded-lg text-2xl flex justify-center items-center gap-x-2"
    const btn = formStatus.pending ? (
        <button type="submit" className={className} disabled>{ContentJson.contact.form.submit.label2} <LoadingIndicator className="animate-spin" width={24} height={24} /></button>
    ) : (
        <button type="submit" className={className}>{ContentJson.contact.form.submit.label}</button>
    )

    return btn
}