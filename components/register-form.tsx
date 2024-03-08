"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import LoadingIndicator from "./icons/loading";
import { submitRegisterAction } from "../app/actions";

import ContentJson from "@/content.json";

const initialState = {
  success: false,
  error: false,
  message: "",
};

export function RegisterForm() {
  const [formState, formAction] = useFormState(
    submitRegisterAction,
    initialState
  );

  React.useEffect(() => {
    if (formState.error === true) {
      toast.error(formState.message);
    }
    if (formState.success === true) {
      toast.success(formState.message);
    }
  }, [formState]);

  return (
    <form
      action={formAction}
      className="flex flex-col w-full md:w-4/5 lg:w-3/5 rounded-2xl p-8 lg:p-16 backdrop-blur-lg bg-slate-600/30"
    >
      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label className="text-2xl" htmlFor="studentName">
          Student&apos;s Name
        </label>
        <input
          type="text"
          required
          id="studentName"
          name="studentName"
          className="h-8 text-slate-900"
        />
      </div>

      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label className="text-2xl" htmlFor="studentAge">
          Age
        </label>
        <input
          type="number"
          required
          id="studentAge"
          name="studentAge"
          className="h-8 text-slate-900"
        />
      </div>

      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label className="text-2xl" htmlFor="course">
          Select Course
        </label>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="guitar"
              name="course"
              value="Guitar"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Guitar</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="keyboard"
              name="course"
              value="Keyboard"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Keyboard</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="vocal"
              name="course"
              value="Vocal"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Vocal</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="music_production"
              name="course"
              value="Music Production"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Music Production</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="mix_and_master"
              name="course"
              value="Mix and Master"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Mix and Master</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-y-2 text-xl mt-8">
        <label className="text-2xl" htmlFor="typeOfCourse">
          Type of Course
        </label>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="online"
              name="typeOfCourse"
              value="Online"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Online</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              required
              id="offline"
              name="typeOfCourse"
              value="Offline"
              className="h-4 w-4 text-slate-900"
            />
            <span className="ml-2">Offline</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
        <label className="text-2xl" htmlFor="email">
          {ContentJson.contact.form.email.label}
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          className="h-8 text-slate-900"
        />
      </div>

      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label className="text-2xl" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          pattern="(\+1)?\d{10}"
          title="Phone number (e.g., +1234567890 or 1234567890)"
          required
          id="phone"
          name="phone"
          className="h-8 text-slate-900"
        />
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const formStatus = useFormStatus();
  const className =
    "mt-12 p-4 bg-blue-600 hover:opacity-65 rounded-lg text-2xl flex justify-center items-center gap-x-2";
  const btn = formStatus.pending ? (
    <button type="submit" className={className} disabled>
      {ContentJson.contact.form.submit.label2}{" "}
      <LoadingIndicator className="animate-spin" width={24} height={24} />
    </button>
  ) : (
    <button type="submit" className={className}>
      {ContentJson.contact.form.submit.label}
    </button>
  );

  return btn;
}
