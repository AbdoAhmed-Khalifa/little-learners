const footerList = [
  {
    sectionName: "Home",
    url: "/",
    sectionList: [
      { label: "Features", url: "/#features" },
      { label: "Our Testimonials", url: "#/testimonials" },
      { label: "FAQ", url: "/#faq" },
    ],
  },
  {
    sectionName: "Academics",
    url: "/academics",
    sectionList: [
      { label: "Special Features", url: "/academics#special-features" },
      { label: "Gallery", url: "/academics#gallery" },
    ],
  },
  {
    sectionName: "About Us",
    url: "/about",
    sectionList: [
      { label: "Our Mission", url: "/about#mission" },
      { label: "Awards and Recognitions", url: "/about#awards" },
      { label: "History", url: "/about#history" },
      { label: "Teachers", url: "/about#teachers" },
    ],
  },

  {
    sectionName: "Contact Us",
    url: "/contact-us",
    sectionList: [
      { label: "Information", url: "/contact-us#information" },
      { label: "Map & Direction", url: "/contact-us#map" },
    ],
  },
];

const pageCardData: { title: string; description: string }[] = [
  {
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];

const faq = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "We take food allergies and dietary restrictions very seriously. Parents are encouraged to inform us of any specific needs, and we work closely with our kitchen and staff to accommodate these requirements safely.",
  },
  {
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "Our teacher-to-student ratio is designed to ensure each child receives individual attention and support. The exact ratio may vary by age group, but it typically ranges from 1:8 to 1:12.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, we have a uniform policy to help create a sense of unity and focus. Uniform details can be provided upon enrollment.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a variety of extracurricular activities, including arts and crafts, music, sports, and language clubs to enrich the learning experience and support diverse interests.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "Our approach to discipline is centered on positive reinforcement, guidance, and conflict resolution strategies. We work with students to help them understand their actions and make better choices.",
  },
  {
    question: "How do I apply for admission to Little Learners Academy?",
    answer:
      "To apply for admission, please visit our website to fill out the application form or contact our admissions office directly for further guidance.",
  },
];

export { footerList, pageCardData, faq };
