import { ContactForm } from "@/components/contact-form";
import Image from "next/image";


export default function ContactUsPage() {
    return (
        <div className="flex w-full pt-[90px]">
            <div className="flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
                <h2 className="text-4xl text-slate-200">Contact Us</h2>

                <Image
                    src="/images/contact.avif"
                    alt="Contact Us"
                    className=""
                    width={450}
                    height={200}
                    priority
                />

                <ContactForm />
            </div>
        </div>
    )
}