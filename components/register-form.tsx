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
        <label
          className="text-2xl"
          htmlFor={ContentJson.register.form.studentName.name}
        >
          {ContentJson.register.form.studentName.label}
        </label>
        <input
          type="text"
          required
          id={ContentJson.register.form.studentName.name}
          name={ContentJson.register.form.studentName.name}
          className="h-8 text-slate-900"
        />
      </div>

      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label
          className="text-2xl"
          htmlFor={ContentJson.register.form.studentAge.name}
        >
          {ContentJson.register.form.studentAge.label}
        </label>
        <input
          type="number"
          required
          id={ContentJson.register.form.studentAge.name}
          name={ContentJson.register.form.studentAge.name}
          className="h-8 text-slate-900"
        />
      </div>

      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label
          className="text-2xl"
          htmlFor={ContentJson.register.form.course.name}
        >
          {ContentJson.register.form.course.label}
        </label>
        <div className="flex flex-col">
          {ContentJson.register.form.course.options.map((courseOption) => {
            return (
              <label className="inline-flex items-center" key={courseOption.id}>
                <input
                  type="radio"
                  required
                  id={courseOption.id}
                  name={ContentJson.register.form.course.name}
                  value={courseOption.label}
                  className="h-4 w-4 text-slate-900"
                />
                <span className="ml-2">{courseOption.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-y-2 text-xl mt-8">
        <label
          className="text-2xl"
          htmlFor={ContentJson.register.form.typeOfCourse.name}
        >
          {ContentJson.register.form.typeOfCourse.label}
        </label>
        <div className="flex flex-col">
          {ContentJson.register.form.typeOfCourse.options.map(
            (typeOfCourse) => {
              return (
                <label
                  className="inline-flex items-center"
                  key={typeOfCourse.id}
                >
                  <input
                    type="radio"
                    required
                    id={typeOfCourse.id}
                    name={ContentJson.register.form.typeOfCourse.name}
                    value={typeOfCourse.label}
                    className="h-4 w-4 text-slate-900"
                  />
                  <span className="ml-2">{typeOfCourse.label}</span>
                </label>
              );
            }
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-y-2 mt-8 text-xl">
        <label
          className="text-2xl"
          htmlFor={ContentJson.register.form.email.name}
        >
          {ContentJson.contact.form.email.label}
        </label>
        <input
          type="email"
          required
          id={ContentJson.register.form.email.name}
          name={ContentJson.register.form.email.name}
          className="h-8 text-slate-900"
        />
      </div>

      <div className="flex flex-col justify-between mt-8 gap-y-2 text-xl">
        <label
          className="text-2xl"
          htmlFor={ContentJson.register.form.phone.name}
        >
          {ContentJson.register.form.phone.label}
        </label>
        <input
          type="tel"
          pattern="(\+1)?\d{10}"
          title="Phone number (e.g., +1234567890 or 1234567890)"
          required
          id={ContentJson.register.form.phone.name}
          name={ContentJson.register.form.phone.name}
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
      {ContentJson.register.form.submit.label2}
      <LoadingIndicator className="animate-spin" width={24} height={24} />
    </button>
  ) : (
    <button type="submit" className={className}>
      {ContentJson.register.form.submit.label}
    </button>
  );

  return btn;
}
