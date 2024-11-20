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

const missionAndVision = [
  {
    title: "Mission",
    icon: "mission.svg",
    description:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
  },
  {
    title: "Vision",
    icon: "vision.svg",
    description:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
  },
];

const studentsLearn = [
  {
    title: "Language Arts",
    image: "/images/Language.png",
    description: "Reading, writing, storytelling, and communication skills.",
  },
  {
    title: "Mathematics",
    image: "/images/mathematics.png",
    description: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    title: "Science",
    image: "/images/science.png",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    title: "Social Studies",
    image: "/images/socialstudies.png",
    description:
      "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    title: "Arts and Crafts",
    image: "/images/artsandcrafts.png",
    description: "Encouraging creativity through various art forms and crafts.",
  },
  {
    title: "Physical Education",
    image: "/images/physicalEducation.png",
    description: "Promoting physical fitness, coordination, and teamwork.",
  },
];
const roomsFilters = [
  { id: "all", label: "All" },
  { id: "classrooms", label: "Classrooms" },
  { id: "library", label: "Library" },
  { id: "science-lab", label: "Science Lab" },
  { id: "computer-lab", label: "Computer Lab" },
  { id: "garden", label: "Garden and Nature Area" },
];

const rooms = [
  {
    title: "Classrooms",
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      "/images/classrooms1.png",
      "/images/classrooms2.png",
      "/images/classrooms3.png",
      "/images/classrooms4.png",
      "/images/classrooms3.png",
      "/images/classrooms2.png",
    ],
  },
  {
    title: "Library",
    description:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [
      "/images/library3.png",
      "/images/library1.png",
      "/images/library2.png",
      "/images/library3.png",
      "/images/library4.png",
      "/images/library2.png",
    ],
  },
  {
    title: "Science Lab",
    description:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [
      "/images/scienceLab3.png",
      "/images/scienceLab1.png",
      "/images/scienceLab2.png",
      "/images/scienceLab3.png",
      "/images/scienceLab4.png",
      "/images/scienceLab4.png",
    ],
  },
  {
    title: "Computer Lab",
    description:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills.",
    images: [
      "/images/scienceLab3.png",
      "/images/computerLab1.png",
      "/images/computerLab2.png",
      "/images/computerLab3.png",
      "/images/computerLab4.png",
      "/images/computerLab2.png",
    ],
  },
  {
    title: "Garden and Nature Area",
    description:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [
      "/images/gardenArea3.png",
      "/images/gardenArea2.png",
      "/images/gardenArea3.png",
      "/images/gardenArea4.png",
      "/images/gardenArea2.png",
    ],
  },
];

export {
  footerList,
  pageCardData,
  faq,
  missionAndVision,
  studentsLearn,
  roomsFilters,
  rooms,
};
