export interface Project {
  id: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  description: string[];
  tech: string[];
  category: 'AI/Navigation' | 'Web/MERN';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreLabel: string;
  details: string;
}

export interface Skill {
  name: string;
  category: 'languages' | 'web' | 'frameworks' | 'databases' | 'tools' | 'core';
  level: 'Intermediate' | 'Foundation' | 'Beginner' | 'Proficient';
  iconName: string;
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  duration: string;
  details: string[];
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  verifyUrl?: string;
}

export const PERSONAL_INFO = {
  name: "YUVARAJ S",
  title: "Computer Science Engineer",
  subTitle: "Aspiring Full Stack & AI Developer",
  phone: "+91 9025266232",
  email: "yuvaraj.s1511@gmail.com",
  linkedIn: "linkedin.com/in/yuvaraj-s-97b02137a",
  linkedInUrl: "https://linkedin.com/in/yuvaraj-s-97b02137a",
  github: "github.com/yuvaraj1511",
  githubUrl: "https://github.com/yuvaraj1511",
  careerObjective: "Aspiring Computer Science Engineer with strong foundations in Java, Python, and full-stack development. Interested in building AI-driven and scalable applications. Seeking an entry-level role to apply technical skills and contribute to innovative solutions.",
  location: "Coimbatore, Tamil Nadu, India",
  additionalInfo: [
    "Athlete and active team participant with excellent collaborative skills.",
    "Proven experience in leading academic projects and managing deadlines."
  ]
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "CMS College of Engineering",
    location: "Coimbatore",
    duration: "2022 - 2026 (Pursuing)",
    score: "7.89/10",
    scoreLabel: "CGPA",
    details: "Focusing on core computer science subjects, algorithms, database management, and hands-on software development laboratories."
  },
  {
    degree: "HSC (State Board Grade XII)",
    institution: "State Board School",
    location: "Tamil Nadu",
    duration: "Year of Completion: 2022",
    score: "77.5%",
    scoreLabel: "Percentage",
    details: "Specialized in Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    degree: "SSLC (State Board Grade X)",
    institution: "State Board School",
    location: "Tamil Nadu",
    duration: "Year of Completion: 2020",
    score: "95.0%",
    scoreLabel: "Percentage",
    details: "Foundational secondary education with standard honors."
  }
];

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { name: "Java", category: "languages", level: "Proficient", iconName: "Coffee" },
  { name: "Python", category: "languages", level: "Foundation", iconName: "Terminal" },
  { name: "C (Foundations)", category: "languages", level: "Foundation", iconName: "Cpu" },
  
  // Web Technologies & Stack
  { name: "HTML5 & CSS3", category: "web", level: "Proficient", iconName: "Code" },
  { name: "JavaScript (ES6+)", category: "web", level: "Proficient", iconName: "FileCode" },
  { name: "MERN Stack", category: "frameworks", level: "Intermediate", iconName: "Layers" },
  { name: "React.js", category: "frameworks", level: "Proficient", iconName: "Atom" },
  { name: "Node.js", category: "frameworks", level: "Intermediate", iconName: "Server" },
  { name: "Express.js", category: "frameworks", level: "Intermediate", iconName: "ShieldAlert" },
  
  // Databases
  { name: "MongoDB", category: "databases", level: "Intermediate", iconName: "Database" },
  { name: "MySQL", category: "databases", level: "Intermediate", iconName: "Database" },
  { name: "JDBC", category: "databases", level: "Proficient", iconName: "Share2" },
  
  // Tools & Core Concepts
  { name: "Git & GitHub", category: "tools", level: "Proficient", iconName: "GitBranch" },
  { name: "Data Structures (DS)", category: "core", level: "Intermediate", iconName: "Binary" },
  { name: "AI/ML Concepts", category: "core", level: "Beginner", iconName: "Brain" },
  { name: "Full Stack Development", category: "core", level: "Intermediate", iconName: "Globe" },
  { name: "Microsoft Excel", category: "tools", level: "Intermediate", iconName: "FileSpreadsheet" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-traffic-ai",
    title: "Smart Traffic AI",
    subtitle: "AI-Powered Traffic Management & Route Optimizer",
    githubUrl: "https://github.com/yuvaraj1511/smart-traffic-ai",
    description: [
      "Implemented AI-based traffic prediction models to forecast congestion levels and suggest optimal, safer routes.",
      "Integrated beautiful real-time map visualization capabilities for users to track dynamic path adaptations.",
      "Developed incident reporting feeds enabling crowdsourced notifications for accidents, road closures, and congestion tracking."
    ],
    tech: ["Python", "React", "Node.js", "AI/ML (Beginners)", "Map API", "MERN Stack"],
    category: "AI/Navigation"
  },
  {
    id: "neural-link",
    title: "NeuralLink",
    subtitle: "AI-Based Intelligent Navigation System",
    githubUrl: "https://github.com/yuvaraj1511/neural-link",
    description: [
      "Built an AI-driven navigation engine designed to analyze alternative routing parameters far beyond the traditional shortest path.",
      "Implemented comprehensive multi-parameter route scoring based on modern factors like safety indices, historical traffic, and fuel efficiency.",
      "Designed clean graphical dashboards explaining the underlying reasoning behind the selected paths to the user."
    ],
    tech: ["React", "Express.js", "MongoDB", "AI Routing", "Tailwind CSS"],
    category: "AI/Navigation"
  },
  {
    id: "neucommerce",
    title: "NeuCommerce",
    subtitle: "Creator-Driven Fashion Platform",
    githubUrl: "https://github.com/yuvaraj1511/neucommerce",
    description: [
      "Developed an interactive e-commerce application targeting product discoverability through short-form video content.",
      "Designed extreme mobile-first responsive user interfaces to increase customer interaction and retention rate.",
      "Engineered an influencer-focused feed model where visual creator reels link seamlessly to interactive shopping checkout components."
    ],
    tech: ["MERN Stack", "MongoDB", "React", "Node.js", "Express.js", "Video Streaming"],
    category: "Web/MERN"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Java Full Stack Trainee",
    organization: "Tap Academy, Bangalore",
    location: "Bangalore, India",
    duration: "2024",
    details: [
      "Completed rigorous immersive industrial training focusing on Java Enterprise Edition, OOPS, and relational schemas.",
      "Mastered backend engineering core standards, MVC framework architectures, and persistent database integration via Hibernate and Spring concepts.",
      "Successfully built standalone and web application prototypes validating theoretical understanding with clean design patterns."
    ],
    tags: ["Java", "OOPs", "JDBC", "SQL", "Backend Development"]
  },
  {
    role: "MERN Stack Intern",
    organization: "Webstack Academy",
    location: "Remote",
    duration: "Mar 2024 – May 2024",
    details: [
      "Engineered multi-tier web architectures using React.js for the dynamic layout and Node.js with Express.js for the server logic.",
      "Structured schema collections in MongoDB and constructed secure REST APIs to process real-time transaction sequences.",
      "Learned essential Git-flow collaboration techniques, handling asynchronous state models, and debugging runtime server logs."
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"]
  },
  {
    role: "Full Stack Development Intern",
    organization: "Novitech R&D Pvt Ltd",
    location: "Coimbatore, India",
    duration: "Internship Term",
    details: [
      "Contributed to physical and virtual software testing phases, verifying interface interactions under high network usage scenarios.",
      "Bridged frontend templates and background services to support live, dynamic content updates within product dashboards.",
      "Acquired deep understanding of standard software development life cycle (SDLC) workflows and rapid prototyping techniques."
    ],
    tags: ["HTML/CSS", "JavaScript", "API Integration", "SDLC", "UI Integration"]
  },
  {
    role: "In-Plant Training",
    organization: "Lenovo India Pvt Ltd",
    location: "Pondicherry, India",
    duration: "2023",
    details: [
      "Acquired first-hand corporate experience inside the hardware production and technology assembly systems.",
      "Studied industrial assembly workflows, operational automation chains, and manufacturing scale logistics.",
      "Gained key coordination insights into enterprise team communication standards and strict quality control operations."
    ],
    tags: ["Industrial Automation", "Quality Control", "Operational Workflows", "Lean Principles"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Python Development & Data Science",
    issuer: "Udemy",
    date: "Completed"
  },
  {
    title: "Machine Learning & Artificial Intelligence",
    issuer: "Udemy",
    date: "Completed"
  },
  {
    title: "JDBC API Integration & Database Access",
    issuer: "Infosys Springboard",
    date: "Certified"
  },
  {
    title: "Comprehensive Career & Placement Training",
    issuer: "Simplilearn",
    date: "Completed"
  }
];
