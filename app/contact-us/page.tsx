import React from "react";
import PageHeader from "../_components/PageHeader";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import ContactSection from "../_components/contactForm/ContactSection";

export default function Contact() {
  return (
    <>
      <PageHeader
        page="Contact Us"
        title="Feel Free To Connect With Us"
        content="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
      >
        <section className="flex items-center justify-start gap-x-2.5 rounded-xl border-2 border-dark-15 bg-primary-99 px-1 py-2">
          <Link
            href={"mailto:hello@littlelearners.com"}
            className="flex items-start justify-center rounded-md border-2 border-dark-15 bg-primary-90 p-[8px] hover:bg-primary-80"
          >
            <EnvelopeIcon className="h-4 w-5" />
          </Link>
          <p className="font-outfit text-base font-medium">
            hello@littlelearners.com
          </p>
        </section>
        <section className="flex items-center justify-start gap-x-2.5 rounded-xl border-2 border-dark-15 bg-primary-99 px-1 py-2">
          <Link
            href={"tel:+91 91813 23 2309"}
            className="flex items-start justify-center rounded-md border-2 border-dark-15 bg-primary-90 p-[8px] hover:bg-primary-80"
          >
            <PhoneIcon className="h-4 w-5" />
          </Link>
          <p className="font-outfit text-base font-medium">+91 91813 23 2309</p>
        </section>
        <section className="flex items-center justify-start gap-x-2.5 rounded-xl border-2 border-dark-15 bg-primary-99 px-1 py-2">
          <Link
            href={""}
            className="flex items-start justify-center rounded-md border-2 border-dark-15 bg-primary-90 p-[8px] hover:bg-primary-80"
          >
            <MapPinIcon className="h-4 w-5" />
          </Link>
          <p className="font-outfit text-base font-medium">
            Somewhere in the World
          </p>
        </section>
        <section className="flex items-center justify-start gap-x-2.5 rounded-xl border-2 border-dark-15 bg-primary-99 px-1 py-2">
          <div className="flex items-start justify-center rounded-md border-2 border-dark-15 bg-primary-90 p-[8px] hover:bg-primary-80">
            <ClockIcon className="h-4 w-5" />
          </div>
          <p className="font-outfit text-base font-medium">
            Office Hours - 9am - 6 pm
          </p>
        </section>
      </PageHeader>
      <ContactSection />
    </>
  );
}
