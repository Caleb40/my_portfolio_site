import {
  mobile,
  backend,
  web,
  typescript,
  python,
  nestjs,
  nextjs,
  django,
  postgresql,
  reactjs,
  expressjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  threejs,
  ai,
  gpt3,
  instinct,
  cribr,
  ttb,
  gericht_logo,
  toptierbinary,
  gericht,
  instinctvas,
  adolaai,
  demogpt3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Visualisation & Machine Learning",
    icon: mobile,
  },
  {
    title: "Deployment/DevOps",
    icon: web,
  },
  {
    title: "Amazon Web Services",
    icon: mobile,
  },
  {
    title: "Database Management and Maintenance",
    icon: backend,
  },
  {
    title: "IT Expert",
    icon: web,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];


const experiences = [
  {
    title: "Backend Developer (Django)",
    company_name: "TopTierBinary",
    icon: ttb,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "Designed, built, and launched a fully-featured backend API for an innovative finance platform, implementing robust authentication and top-notch security features.",
      "Collaborated effectively with cross-functional teams, including designers and product managers, to craft an API system that precisely met their unique specifications.",
      "Ensured data integrity with AWS S3 backups for the production database, providing excellent redundancy and safeguarding critical financial information.",
      "Contributed to team growth through constructive code reviews, fostering an environment of continuous improvement.",
    ],
  },
  {
    title: "Backend Developer (Django & ExpressJS)",
    company_name: "Cribr Inc.",
    icon: cribr,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Contributed as a core member of the development team, shaping the backend of a pioneering cross-platform site that empowered university students to find off-campus accommodations.",
      "Successfully integrated two industry-leading frameworks, Django and ExpressJS, leveraging their distinct strengths for optimal reliability and ultra-low latencies.",
      "Streamlined the deployment process using Docker and Redis, improving efficiency and effectively caching non-changing components of the API.",
      "Explored various PaaS options to optimize hosting costs and ensure reliability, selecting Heroku, Digital Ocean, and Railway for their strong plugin support.",
    ],
  },
  {
    title: "Backend Developer and CEO",
    company_name: "InstinctVAS",
    icon: instinct,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Entrepreneurially spearheaded the development and successful launch of a dynamic subscription-based website, revolutionizing the virtual assistant services industry.",
      "Built a stable and scalable backend powered by ExpressJS, securing user authentication, fortifying website security, and delivering seamless static file serving and database storage.",
      "Provided a seamless user experience with an integrated, secure payment gateway, empowering users to subscribe effortlessly using their preferred payment methods, courtesy of Paystack integration.",
      "Contributed to team growth and development through inspiring code reviews, fostering an environment of collaboration and excellence.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Gericht Restaurant",
    icon: gericht_logo,
    iconBg: "#383E56",
    date: "Sept 2022 - Oct 2022",
    points: [
      "Conceptualized and crafted an engaging restaurant landing page using React, elevating our client's online presence and captivating their audience.",
      "Collaborated closely with designers, product managers, and fellow developers to create an unrivaled user experience within cross-functional teams.",
      "Ensured accessibility and visual appeal with responsive design principles, utilizing CSS media queries and flexbox layouts to ensure a captivating display across diverse devices and screen resolutions.",
      "Implemented reusable React components and optimized code structure, fortifying the foundation for improved code maintainability and seamless scalability.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "GPT-3 Landing Page",
    icon: gpt3,
    iconBg: "#E6DEDD",
    date: "July 2022 - Aug 2022",
    points: [
      "Conceptualized and actualized a captivating GPT (Generative Pre-trained Transformer) landing page demo using React, expertly showcasing the possibilities of natural language processing and AI-powered text generation.",
      "Employed React's component-based architecture to sculpt responsive and visually stunning user interfaces, ensuring a seamless and enchanting journey across an array of devices and screen sizes.",
      "Focused on top-tier performance optimization, employing Google's Lighthouse and utilizing React's capabilities to deliver smooth interactions and fast response times.",
    ],
  },
  {
    title: "Machine Learning and Data Analysis",
    company_name: "",
    icon: ai,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Sept 2021",
    points: [
      "Developed and trained machine learning models using languages like Python, R, NumPy, TensorFlow, and various other libraries to solve complex business problems and improve data-driven decision-making processes.",
      "Utilized Python's pandas library to clean, transform, and manipulate large datasets, ensuring data consistency throughout the analysis and modeling pipeline.",
      "Applied machine learning algorithms, such as regressions, classifications, clustering, and deep learning, to build and uncover patterns and trends within data.",
      "Trained NLU (Natural Language Understanding) chatbots for customer service purposes, using libraries like Spacy, ChatterBox, and Rasa NLU.",
    ],
  },
  {
    title: "Python Development",
    company_name: "",
    icon: python,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Feb 2021",
    points: [
      "Acquired proficiency in Python through self-study, online resources, and practical projects, building a strong foundation in the language's syntax, concepts, and best practices.",
      "Developed a variety of Python applications, including 'Anime-Renamer' - a web scraper bot for renaming anime files by fetching their names from Wikipedia, a multiplayer tic-tac-toe game built with Tkinter, and other projects to apply and enhance my understanding of Python's capabilities.",
      "Documented some of my projects and codebase, including detailed explanations, code comments, and README files, promoting knowledge sharing and enabling ease of future maintenance and enhancements.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Caleb amazed us with a website that perfectly complements our product's beauty. Exceptional work!",
    name: "Victor Oyeniyi",
    designation: "CEO",
    company: "Instinct Virtual Assistant Services",
  },
  {
    testimonial:
      "Completes the job perfectly before deadlines. Would definitely want to work with him again.",
    name: "Joregan Flores",
    designation: "User",
    company: "Upwork",
  },
  {
    testimonial:
      "Caleb's optimization of our website was a game-changer. Traffic increased by 50%. Grateful!",
    name: "Wealth Abraham",
    designation: "CTO",
    company: "Gskills Computer Schools",
  },
];


const projects = [
  {
    name: "Cribr",
    description:
      "Cribr bridges the gap between landlords and students, offering seamless property advertising and booking for off-campus accommodation. It caters to university students, providing a convenient and efficient housing solution.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "TopTierBinary",
    description:
      "TopTierBinary showcases a responsive and user-friendly frontend application developed for a prominent finance company. The project leverages cutting-edge technologies like React.js, Tailwind CSS, and HTML, with Django serving as the backend infrastructure.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: toptierbinary,
    source_code_link: "https://github.com/",
  },
  {
    name: "InstinctVAS",
    description:
      "I successfully developed and launched a subscription-based website, catering to users seeking virtual assistant services. The platform offers a diverse range of assistance to clients, including administrative tasks, email handling, and research support.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: instinctvas,
    source_code_link: "https://github.com/",
  },
  {
    name: "GPT-3 Landing Page",
    description:
      "Explore the capabilities of natural language processing and AI-based text generation with the GPT-3 landing page demo. It was designed and developed using React.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: demogpt3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gericht Restaurant",
    description:
      "Gericht Restaurant: Exquisitely designed React landing page offers an alluring visual experience, setting the perfect tone for an extraordinary dining adventure.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/",
  },
  {
    name: "Adola AI Summarizer",
    description:
      "Adola AI Summarizer uses advanced AI to create concise summaries, making reading easier. It aids users in quickly grasping key insights from long texts.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: adolaai,
    source_code_link: "https://github.com/",
  },
];




export { services, technologies, experiences, testimonials, projects };