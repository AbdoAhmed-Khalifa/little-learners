import SectionHeader from "../SectionHeader";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Student Information"
        subtitle="Contact Form"
        description="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
      />
      <section className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-4">
        <ContactForm />
      </section>
    </section>
  );
}
