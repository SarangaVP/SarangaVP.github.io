export const personalInfo = {
  name: "Saranga Malshan",
  title: "Final Year Electrical Engineering Undergraduate",
  tagline: "Software Development | Machine Learning | Data Science",
  email: "sarangavp36@gmail.com",
  phone: "+94 718972175", 
  github: "https://github.com/SarangaVP",
  linkedin: "https://www.linkedin.com/in/saranga-malshan-56586b213/",
  location: "Colombo, Sri Lanka",
};

export const about = {
  summary: "I'm a final year Electrical Engineering undergraduate at the University of Moratuwa with a strong background in Machine Learning, Data Science, and Software Development. I'm passionate about solving real-world problems through technology and innovation. I specialize in building full-stack applications, designing ML pipelines, and deploying scalable systems. My experience spans from research and development to building production-ready applications, always driven by curiosity and a commitment to delivering high-quality solutions.",
  image: "/profile.jpeg",
};

export const experience = [
  {
    title: "Software and AI/ML Engineer Intern",
    company: "Jaseci Labs, USA",
    duration: "Dec 2024 - May 2025",
    highlights: [
      "Designed and implemented fine-tuning pipelines for Vision-Language Models with structured hyperparameter experiments and automated evaluation workflows for performance analysis.",
      "Developed and integrated full-stack application features using React, TypeScript, and Redux Toolkit for frontend and Jaclang, Jac Cloud and FastAPI for backend.",
      "Developed backend services and REST APIs, implemented backend unit tests, used Jest framework for frontend testing, and configured GitHub Actions pipelines to automate testing.",
      "Containerized applications using Docker and deployed services with Kubernetes for orchestration and scaling."
    ],
    technologies: ["React", "TypeScript", "Redux Toolkit", "FastAPI", "Jaclang", "Jac Cloud", "Python", "PyTorch", "VLMs", "Docker", "Kubernetes",  "GitHub Actions", "Jest"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Electrical Engineering (Hons)",
    institution: "University of Moratuwa",
    duration: "May 2022 - Present",
    gpa: "3.59/4.00 (Up to Semester 7)",
    honors: ["Dean's List - Semester 4"], 
    coursework: ["Data Structures and Algorithms", "Pattern Recognition", "Modular Software Development", "Deep Learning for Vision", "Applied Statistics", "Embedded Systems Design and Programming", "Intelligent Systems and Machine Learning", "Industrial Network of Things"], 
  },
  {
    degree: "Bachelor of Information Technology (External)",
    institution: "University of Moratuwa",
    duration: "Oct 2023 - Present",
    gpa: "3.92/4.20 (Up to Level 2)",
    honors: ["Completed up to Level 2 (Higher Diploma Level)"], 
    coursework: ["Object Oriented Programming", "Data Structures and Algorithms", "Computer Networks and Operating Systems", "Software Engineering", "Database Management Systems", "IT Quality Assurance"], 
  },
  {
    degree: "G.C.E. Advanced Level - Physical Science Stream",
    institution: "Royal College, Colombo 07",
    duration: "2018 - 2020",
    gpa: "", 
    result: "3A's | Z-Score: 2.2357 | Island Rank: 459", 
    honors: [], 
    coursework: ["Combined Mathematics", "Physics", "Chemistry"], 
  },
];

export const skills = {
  "AI/ML": ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "LangChain", "Hugging Face", "NumPy", "Pandas", "Matplotlib", "OpenCV"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Node.js", "Express.js", "Spring Boot", "PHP", "FastAPI"],
  "Programming Languages": ["Python", "Java", "C#", "C++"],
  "Database Systems": ["MongoDB", "MySQL"],
  "DevOps": ["Docker", "Kubernetes"],
  "Version Control": ["Git", "GitHub"],
  "Other Tools": ["MATLAB", "MS Office", "Figma", "Canva", "Adobe Photoshop"],
  // "Soft Skills": ["Problem Solving", "Communication", "Time Management", "Creativity", "Leadership", "Teamwork"],
  // "Languages": ["Sinhala (Native)", "English (Professional)"],
};

export const projects = [
  {
    title: "Vision Language Model Based Assistive Navigation System",
    description: "A VLM-powered assistive device for visually impaired individuals that provides real-time navigation guidance by fine-tuning a VLM to generate context-aware path recommendations with deployment on NVIDIA Jetson device.",
    technologies: ["Python", "VLM", "PyTorch", "Fine-tuning", "Quantization", "NVIDIA Jetson"],
    github: "https://github.com/SarangaVP",
    image: "/images/projects/vlm-navigation.jpg",
  },
  {
    title: "DocuSense - PDF Chatbot",
    description: "A web app that utilizes large language models to enable users to upload PDF files, ask questions based on the content, and receive accurate answers.",
    technologies: ["Python", "Streamlit", "LLM", "LangChain", "Google Generative AI"],
    github: "https://github.com/SarangaVP/DocuSense",
    image: "/images/projects/docusense.jpg",
  },
  {
    title: "Quality Assurance and Quality Control System",
    description: "A full-stack web application designed to manage quality assurance and quality control processes in an electronic equipment manufacturing company.",
    technologies: ["React", "JavaScript", "Java", "Spring Boot", "MongoDB", "REST APIs"],
    github: "",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/SarangaVP/companyA-frontend" },
      { label: "Backend", url: "https://github.com/SarangaVP/companyA-backend" },
    ],
    image: "/images/projects/qa-system.jpg",
  },
  {
    title: "Review Sentiment Analysis Tool",
    description: "A sentiment analysis tool that scrapes customer reviews, evaluates their sentiments using a BERT model, and visualizes the results.",
    technologies: ["Python", "PyTorch", "Transformers", "BeautifulSoup", "Pandas", "Matplotlib"],
    github: "https://github.com/SarangaVP/Sentiment-Analysis",
    image: "/images/projects/sentiment-analysis.jpg",
  },
  {
    title: "XFeat: Accelerated Features for Lightweight Image Matching",
    description: "Reimplemented CVPR 2024 XFeat paper and extended it for video processing, enabling lightweight feature matching across video frames.",
    technologies: ["Python", "Computer Vision", "OpenCV", "Feature Matching", "Research"],
    github: "https://github.com/SarangaVP/accelerated_features",
    image: "/images/projects/xfeat.jpg",
  },
  {
    title: "Machine Learning and Deep Learning Projects",
    description: "A collection of Machine Learning and Deep Learning projects showcasing various algorithms and techniques.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/SarangaVP/ML-Mini-Projects",
    image: "/images/projects/ml-projects.jpg",
  },
  {
    title: "Autonomous Maze Solving Robot",
    description: "A maze solving robot using multiple navigation strategies including DFS, flood fill, wall following, and line following. Won first place in module competition.",
    technologies: ["C++", "Embedded Systems", "Path Planning", "Control Algorithms"],
    github: "https://github.com/SarangaVP/MazeSolver_Group03",
    image: "/images/projects/maze-robot.jpg",
  },
  {
    title: "Finance Tracker - Web Application",
    description: "A finance tracking app built with the MERN stack to manage and track expenses, income, and budgets efficiently.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/SarangaVP/finance-tracker",
    image: "/images/projects/finance-tracker.jpg",
  },
  {
    title: "Hotel Reservation and Management Application",
    description: "A full-stack web system for managing hotel operations including room bookings, guest check-ins, and feedback, featuring a responsive interface and efficient backend.",
    technologies: ["PHP", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/SarangaVP/Hotel-Management-System",
    image: "/images/projects/hotel-management.jpg",
  },
  {
    title: "Car Rental Platform",
    description: "A desktop application for car rental operations including user registration, vehicle management, availability tracking, booking, and revenue management.",
    technologies: ["C#", ".NET", "SQL Server"],
    github: "https://github.com/SarangaVP/CarRentalSystem",
    image: "/images/projects/car-rental.jpg",
  },
  {
    title: "Automatic Pruning System",
    description: "An automatic pruning system that detects shrub growth and simulates pruning process, using MATLAB for image processing and SolidWorks for mechanical design.",
    technologies: ["MATLAB", "Simulink", "SolidWorks", "Image Processing"],
    github: "https://github.com/SarangaVP/Automatic-Pruning-System",
    image: "/images/projects/pruning.jpg",
  },
  {
    title: "Smart Waste Segregator",
    description: "A fully automated waste management system using LabVIEW and NI-DAQmx to classify waste into metal, dry, and wet categories with fill-level monitoring.",
    technologies: ["LabVIEW", "NI-DAQmx", "Sensors", "Automation"],
    github: "https://github.com/SarangaVP/Smart-Waste-Management-System",
    image: "/images/projects/waste-management.jpg",
  },
];

export const leadership = [
  {
    title: "Head of Publicity Committee",
    organization: "IEEE NPSS Student Branch UoM",
    duration: "Jan 2024 - Jan 2025",
    description: "Led event promotion, managed communications, and coordinated with other committees.",
  },
  {
    title: "Web Developer",
    organization: "Electrical Engineering Society (EESoc)",
    duration: "Nov 2024 - Aug 2025",
    description: "Contributed to development and maintenance of EESoc and EESpire Career Fair websites.",
  },
  {
    title: "Design Committee Member",
    organization: "Electrical Engineering Society (EESoc)",
    duration: "Oct 2023 - Oct 2024",
    description: "Designed program logos, contributed to magazine design, and created promotional materials.",
  },
  {
    title: "Volunteer",
    organization: "EXMO 2023",
    duration: "July 2023",
    description: "Contributed to the development of power system and hydro generation models.",
  },
  {
    title: "General Member",
    organization: "OREPA Student Chapter",
    duration: "Nov 2021 - Present",
    description: "Mentor for junior students in 'Mind Guides', Organizing committee member for Field Familiarization program.",
  },
];

export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    date: "",
    credential: "#",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "",
    credential: "#",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "",
    credential: "#",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "",
    credential: "#",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "",
    credential: "#",
  },
  {
    title: "Version Control",
    issuer: "Meta",
    date: "",
    credential: "#",
  },
];