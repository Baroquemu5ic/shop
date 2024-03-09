import Image from "next/image";
import ContactJson from "@/content.json";
import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex w-full pt-[200px] lg:pt-[120px]">
      <div className="flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-4xl text-slate-200">
          {ContactJson.register.pageHeader}
        </h2>

        <Image
          src="/images/register.avif"
          alt="Register Now"
          className=""
          width={450}
          height={200}
          priority
        />

        <RegisterForm />
      </div>
    </div>
  );
}