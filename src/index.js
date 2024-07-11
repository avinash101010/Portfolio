import portfolio from "./assets/projects/Portfolio.jpg";
import eyevoc from "./assets/projects/eyeVoc.webp";
import pim from "./assets/projects/pim.jpg";
import arm from "./assets/projects/arm.jpg";
import erp from "./assets/projects/erp.jpg";

export const HERO_CONTENT = `I am a passionate and dedicated individual with a strong interest in software engineering, cyber security, building web applications, problem solving, and database management. Over the past year, I have been involved in web development, honing my skills and expanding my knowledge in this field. I enjoy tackling challenges and finding innovative solutions, and I am always eager to learn more and grow in my areas of interest.`;

export const ABOUT_TEXT = `I am a graduate from IIT Tirupati, class of 2024, with a degree in Computer Science and Engineering. My academic background provided a strong foundation in computer science concepts. I have expertise in the MERN framework and several programming languages including C++, Python, Java, and SQL. I am also skilled in HTML, CSS, and JavaScript XML. I am familiar with both Linux and Windows operating systems and have experience using tools like VS Code, XAMPP, Git, NocoBase, PyCharm, and IntelliJ.`;

export const AchievementsC = [

  {
    title: "Summer Intern",
    description: "I got appreciation certificate for my 2 months of summer internship"
  },
  {
    title: "Foundations of Cybersecurity",
    description: "This course taught me foundations of cyber security"
  },
  {
    title: "AI essentials",
    description: "This course taught me essentials of AI. this was delevered by Google"
  },
]

export const EXPERIENCES = [
  {
    year: "May'23 - Jul'23",
    role: "Product Implementor",
    company: "Diagonal Matrix",
    description: ` Built a financial service-related application using Nocobase software. Created specific admin workflows for activities such as customer onboarding, KYC(Know Your Customer), and Customer off-boarding which gives access to monitor and control records, information, activities, etc.`,
    technologies: ["Superset", "Nocobasae", "Mokaro", " PostgreSQL"],
  },

];

export const PROJECTS = [
  {
    title: "Eye-Voc",
    image: eyevoc,
    description:
      "This innovative tool is designed to empower individuals who may have limited hand mobility. With this tool, they can control PC & code with just Voice and Eye iris moments. This is designed especially from a programmer’s perspective. Anyone can use it without any external hardware machine.",
    technologies: ["Python", "Speech recongition"],
  },
  {
    title: "ARM-Computer System Design",
    image: arm,
    description:
      " Developed a computer system based on ARM architecture. Worked on developing Tiny OS for our system using our self-defined language. Implemented features such as enabling keyboard-driven screen control and supported the execution of custom programs, including a tic-tac-toe game",
    technologies: ["Jack", "OS"],
  },
  {
    title: "PIM for Machine Learning",
    image: pim,
    description:
      "It is a comprehensive research on Processing-in-Memory (PIM) architecture, contrasting its efficiency against traditional processor-centric systems and planned to implement Dynamic Hardware-based instruction formation using the fusion technique and using the new architecture to enhance the training of ML models.",
    technologies: ["ML", "GEM5", "Computer Architecture"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. currently you are viewing this website",
    technologies: ["HTML", "Tailwind-CSS", "Vite", "React", "JavaScript"],
  },
  {
    title: "E-Governance Portal",
    image: erp,
    description:
      "Built a functional website using the MERN stack framework, which includes a few module specifications similar to the E-Governance portal which is useful for maintaining student’s records, requests, etc",
    technologies: ["MongoDB", "Express", "React", "NodeJs", "HTML", "Tailwind-CSS",],
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9865321470",
  email: "avinash@gmail.com",
};
