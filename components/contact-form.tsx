"use client"

import React from "react"
import { useFormState, useFormStatus } from "react-dom"
import LoadingIndicator from './icons/loading'
import { submitEmailAction } from "../app/actions"

const initialState = {
    success: false,
    error: false,
    message: ''
}

export function ContactForm() {
    const [formState, formAction] =  useFormState(submitEmailAction, initialState)


    return (
        <form action={formAction} className="flex flex-col w-full lg:w-3/5 border rounded-2xl p-8 lg:p-16 backdrop-blur-lg bg-slate-600/30">
            <div className="flex flex-col justify-between gap-y-2 text-xl">
                <label htmlFor="username">Name</label>
                <input type="text" required id="username" name="username" className="h-8 text-slate-900" />
            </div>

            <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
                <label htmlFor="email">Email</label>
                <input type="email" required id="email" name="email" className="h-8 text-slate-900" />
            </div>

            <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
                <label htmlFor="subject">Subject</label>
                <input type="text" required id="subject" name="subject" className="h-8 text-slate-900" />
            </div>

            <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
                <label htmlFor="usermessage">Message</label>
                <textarea required rows={10} id="usermessage" name="usermessage" className="text-slate-900 cursor-text" />
            </div>

    
            {formState.error ? (<p className="bg-red-600 text-white text-center p-4 mt-8">{formState.message}</p>) : null}
            {formState.success ? (<p className="bg-green-400 text-white text-center p-4 mt-8">{formState.message}</p>) : null}


            <SubmitButton />
        </form>
    )
}


function SubmitButton() {
    const formStatus = useFormStatus()
    const className = "mt-12 p-4 bg-blue-600 hover:opacity-65 rounded-lg text-2xl flex justify-center items-center gap-x-2"
    const btn = formStatus.pending ? (
        <button type="submit" className={className} disabled>Submitting <LoadingIndicator className="animate-spin" width={24} height={24} /></button>
    ) : (
        <button type="submit" className={className}>Submit Message</button>
    )

    return btn
}