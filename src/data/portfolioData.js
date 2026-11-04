export const personalInfo = {
  name: "Rahul Kumar S",
  headline: "Hi, I'm Rahul Kumar S 👋",
  subheading: "Final-year B.Tech Artificial Intelligence & Data Science Student",
  roles: [
    "AI & Data Science Student",
    "Full-Stack Software Developer",
    "Backend Engineer",
    "Machine Learning Enthusiast"
  ],
  bio: "Passionate about applying skills in software development, machine learning, and full-stack engineering to build scalable, data-driven applications that solve real-world problems.",
  email: "rahulkumar082806@gmail.com",
  phone: "+91 9344665422",
  github: "https://github.com/RAHULKUMARS2006",
  location: "Tamil Nadu, India",
  photo: "/IMG-RK.jpg.jpeg",
  stats: [
    { label: "Graduation", value: "2027", detail: "Expected" },
    { label: "Core Projects", value: "4+", detail: "Full-Stack & AI" },
    { label: "Certifications", value: "IBM Verified", detail: "Back-End Spec" },
    { label: "Internship", value: "Completed", detail: "IBM Cognos BI" },
  ]
};

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Christian College of Engineering and Technology",
  location: "Oddanchatram, Tamil Nadu",
  timeline: "Expected 2027",
  status: "Final-Year Student",
  description: "Specialized in Artificial Intelligence, Machine Learning algorithms, Data Structures, Modern Web Architecture, and Database Systems. Actively engaged in technical initiatives and real-world system building.",
  highlights: [
    "Core curriculum in Machine Learning, Deep Learning, and Predictive Analytics",
    "Hands-on architectural foundations in Data Structures & Algorithms",
    "Modern Database Management (Relational & NoSQL)",
    "Full-Stack software design and distributed systems principles"
  ]
};

export const experience = [
  {
    role: "Virtual Intern — IBM Cognos Analytics Project",
    company: "Adroit Technologies Innovative Solutions Pvt. Ltd.",
    partner: "Naan Muthalvan Initiative",
    period: "Mar 2026 – Apr 2026",
    type: "Virtual Internship",
    description: "Engaged in hands-on enterprise business intelligence and data analytics, delivering interactive reporting dashboards using IBM Cognos Analytics.",
    achievements: [
      "Completed a hands-on project utilizing IBM Cognos Analytics, building structured data models, interactive dashboards, and analytical reports.",
      "Applied foundational business intelligence metrics and predictive visual patterns for organizational data streams.",
      "Synthesized multi-dimensional data into actionable visualizations, empowering faster decision-making workflows."
    ],
    skills: ["IBM Cognos Analytics", "Business Intelligence", "Data Visualization", "Dashboard Design", "KPI Reporting"]
  }
];

export const projects = [
  {
    id: "disinformation-analyst",
    title: "Disinformation Analyst",
    subtitle: "OpenEnv Environment & 3D Interactive Web Studio",
    category: "AI & Full-Stack",
    period: "Featured",
    tech: ["Python", "FastAPI", "React", "Three.js", "Reinforcement Learning"],
    description: "A comprehensive three-task OpenEnv-compliant RL environment where an LLM agent detects, traces, and scores disinformation propagation across synthetic news and social media graphs.",
    highlights: [
      "Designed tasks spanning node classification, multi-hop propagation tracing, and claim severity rating.",
      "Graded by a deterministic oracle using BFS path analysis, F1, and RMSE with zero LLM calls for speed and determinism.",
      "Engineered an interactive 3D web studio with React and Three.js for real-time graph visualization.",
      "Integrated FastAPI backend exposing the environment as a high-performance REST API.",
      "Optimized the grading engine with O(V+E) BFS traversal and dense per-step reward signals for reproducible, offline-auditable RL evaluation."
    ],
    featured: true,
    github: "https://github.com/RAHULKUMARS2006",
    badge: "3D & RL Powered"
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    subtitle: "Biometric Desktop GUI Application",
    category: "Desktop & Systems",
    period: "Featured",
    tech: ["Python", "Tkinter", "CustomTkinter", "SQLite"],
    description: "A high-reliability Python-based desktop application that automates student and staff attendance management through a polished graphical user interface with integrated database persistence.",
    highlights: [
      "Implemented core modules for user/student registration, real-time attendance log tracking, and biometric record updates.",
      "Engineered a robust SQLite persistence layer for instant transaction queries and historical report exports.",
      "Structured the codebase cleanly into modular components (core logic, database abstraction, GUI views) with a dedicated entry-point script (run.py) for maintainability and scalability."
    ],
    featured: true,
    github: "https://github.com/RAHULKUMARS2006",
    badge: "Biometric & Modular"
  },
  {
    id: "event-scheduler-app",
    title: "Event Scheduler App",
    subtitle: "Scalable RESTful Backend & Notification Service",
    category: "Backend & Cloud",
    period: "Featured",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Postman"],
    description: "A production-ready RESTful backend service engineered to create, update, cancel, and archive events, designed with modern microservice design principles and smart notification scheduling.",
    highlights: [
      "Engineered a consolidated `/all-in-one` endpoint providing atomic multi-action operations for flexible frontend consumption.",
      "Implemented an automated smart reminder system utilizing a `reminderAt` field to schedule timely notifications ahead of events.",
      "Leveraged Mongoose and MongoDB for schema validation, data indexing, and robust error handling.",
      "Thoroughly validated and verified all API routes, edge cases, and load behavior via Postman test collections."
    ],
    featured: true,
    github: "https://github.com/RAHULKUMARS2006",
    badge: "RESTful Architecture"
  },
  {
    id: "servicenow-form-validation",
    title: "ServiceNow Form Validation & Update Sets",
    subtitle: "Enterprise ITSM Governance & UI Policies",
    category: "ITSM & Cloud",
    period: "Enterprise",
    tech: ["ServiceNow", "UI Policies", "Client Scripts", "Update Sets"],
    description: "Enterprise workflow governance implementation in ServiceNow enforcing rigorous data integrity on core ITSM forms and seamless migration between development and production instances.",
    highlights: [
      "Configured dynamic UI Policies in ServiceNow to enforce mandatory form fields and improve quality on submitted records without excessive scripting overhead.",
      "Employed ServiceNow Update Sets to cleanly package, audit, and migrate configuration sets across environments in a controlled, trackable manner.",
      "Minimized user submission errors and ensured strict compliance with ITIL organizational process flows."
    ],
    featured: false,
    github: "https://github.com/RAHULKUMARS2006",
    badge: "Enterprise ITSM"
  }
];

export const skillCategories = [
  {
    name: "Languages",
    description: "Core programming and markup languages",
    skills: [
      { name: "Python", level: 90, highlight: "Data Science, FastAPI, Tkinter, Scripting" },
      { name: "HTML5", level: 95, highlight: "Semantic Structure, Accessibility, SEO" },
      { name: "CSS3", level: 90, highlight: "Modern Responsive Design, Flexbox, Grid, Animations" },
      { name: "JavaScript", level: 75, highlight: "Modern ES6+, DOM Manipulation, Async/Await (Currently Advancing)" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    description: "Application frameworks, UI kits, and database connectors",
    skills: [
      { name: "Node.js", level: 85, highlight: "Backend Runtime, Event Loop, Server-side Systems" },
      { name: "Express.js", level: 85, highlight: "REST API Architecture, Middleware, Routing" },
      { name: "CustomTkinter", level: 85, highlight: "Modern Dark/Light Desktop GUIs in Python" },
      { name: "SQLite", level: 85, highlight: "Lightweight Relational Storage, Local Caching, SQL" },
      { name: "React", level: 80, highlight: "Component Architecture, State Hooks, SPAs" },
      { name: "FastAPI", level: 75, highlight: "High-performance Python APIs, Pydantic, Async" }
    ]
  },
  {
    name: "Tools & Platforms",
    description: "Development environments, version control, and cloud platforms",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: "Version Control, Branching, Pull Requests" },
      { name: "VS Code", level: 95, highlight: "Primary IDE, Extensions, Debugging, Terminal" },
      { name: "ServiceNow", level: 80, highlight: "UI Policies, Update Sets, ITSM Configuration" },
      { name: "IBM Cognos Analytics", level: 85, highlight: "BI Dashboards, KPI Reports, Data Exploration" },
      { name: "Supabase", level: 75, highlight: "PostgreSQL, Auth, Real-time Backend" },
      { name: "Netlify", level: 80, highlight: "Continuous Deployment, Web Hosting, Serverless DNS" },
      { name: "Postman", level: 85, highlight: "API Testing, Automated Collections, Mocking" }
    ]
  },
  {
    name: "Currently Learning & Expanding",
    description: "Active technical growth areas and continuous skill upgrades",
    skills: [
      { name: "JavaScript Advanced Ecosystem", level: 78, highlight: "Deepening TypeScript, Advanced Asynchronous Patterns" },
      { name: "Advanced SQL & Database Tuning", level: 80, highlight: "Complex Queries, Index Optimization, Multi-Table Joins" },
      { name: "Cloud & Container Deployments", level: 70, highlight: "Docker Containers, Microservices, CI/CD Pipelines" }
    ]
  }
];

export const certifications = [
  {
    id: "ibm-backend-dev",
    title: "Back-End App Development with Node.js and Express",
    issuer: "IBM / IBM SkillsNetwork",
    partner: "via TamilNadu Skills Development Corporation (Naan Muthalvan)",
    date: "Nov 2025",
    badgeText: "IBM Certified",
    credentialUrl: "https://www.coursera.org/account/accomplishments",
    description: "Comprehensive backend certification covering server-side JavaScript, Express framework, RESTful principles, asynchronous operations, middleware design, and MongoDB integration.",
    skillsCovered: [
      "Node.js Runtime & NPM Ecosystem",
      "Express Application Framework & Routing",
      "RESTful API Architecture & Endpoints",
      "Asynchronous Programming with Promises/Async-Await",
      "Middleware Implementation & Error Handling",
      "Database Integration & Mongoose Modeling"
    ]
  }
];
