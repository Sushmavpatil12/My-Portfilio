import {
  SkillCategory,
  Project,
  EducationItem,
  CertificationItem,
  CarItem,
  InterestCard,
  DashboardLearningItem
} from '../types';

export const personalInfo = {
  name: "Sushma Patil",
  shortName: "Sushma",
  title: "Aspiring Software Developer",
  headline: "Turning Ideas Into Digital Experiences.",
  subHeadline: "I’m Sushma Patil, an aspiring software developer who enjoys building practical applications, exploring technology, and solving problems through code.",
  email: "sushmapatil.contact@gmail.com",
  github: "https://github.com/Sushmavpatil12/Sushmavpatil12",
  linkedin: "https://www.linkedin.com/in/sushma-patil-767491271/",
  photo: "/programmer-avatar.jpg",
  bioShort: "Information Technology undergraduate at MPSTME, NMIMS University (2024–2027) with a diploma in Computer Engineering. Focused on building practical software, learning modern technologies, and solving problems through code.",
  bioLong: [
    "I am an Information Technology undergraduate at MPSTME, NMIMS University, with a foundational diploma in Computer Engineering from R.C. Patel Polytechnic. My journey in technology is driven by curiosity, structured thinking, and a passion for creating software that solves genuine user problems.",
    "Throughout my academic and project work, I have focused on developing full-stack web applications, designing efficient database schemas, and analyzing data patterns. Whether building resource management systems or exploring data intelligence with Power BI and NLP, I value clean code, reliability, and intuitive user experiences.",
    "I believe in continuous learning, deliberate practice, and paying attention to subtle design details that make digital products clear and accessible."
  ],
  stats: [
    { label: "Education", value: "B.Tech IT '27" },
    { label: "Institution", value: "MPSTME, NMIMS" },
    { label: "Projects", value: "4 Core Systems" },
    { label: "Focus", value: "Software Engineering" }
  ],
  resumeUrl: "#resume",
  availability: "Open for Software Engineering Internships"
};

export const carCollection: CarItem[] = [
  // --- 1. BMW ---
  {
    id: "bmw-m4-competition",
    brand: "BMW",
    model: "BMW M4 Competition",
    tagline: "The benchmark in high-performance sports coupés and track poise",
    category: "Sports Coupé",
    specs: {
      engine: "3.0L TwinPower Turbo Inline-6 (S58)",
      power: "503 hp @ 6,250 RPM",
      acceleration: "0–100 km/h in 3.5s",
      highlight: "M xDrive with RWD mode & Carbon Bucket Seats"
    },
    description: "An aggressive aerodynamic stance paired with the legendary S58 inline-six engine. The M4 Competition embodies mechanical agility, surgical steering feedback, and German engineering heritage.",
    whyILoveIt: "The balance between an executive daily cruiser and an unhinged track weapon. The Isle of Man Green and Brooklyn Grey finishes make an unforgettable statement.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
  },

  // --- 2. PORSCHE ---
  {
    id: "porsche-911-gt3-rs",
    brand: "Porsche",
    model: "Porsche 911 GT3 RS",
    tagline: "Surgical aerodynamic mastery with a 9,000 RPM naturally aspirated soul",
    category: "Track Precision",
    specs: {
      engine: "4.0L Naturally Aspirated Boxer-6",
      power: "518 hp @ 8,500 RPM",
      acceleration: "0–100 km/h in 3.2s",
      highlight: "Active DRS rear wing producing 860 kg of downforce"
    },
    description: "Born directly from motorsport. The 992 GT3 RS features radical active aerodynamics, central radiator concept from Le Mans, and a visceral naturally aspirated boxer engine screaming up to 9,000 RPM.",
    whyILoveIt: "Every millimeter of bodywork exists purely for aerodynamic downforce and cooling efficiency. The pinnacle of purist engineering.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"
  },

  // --- 3. LAMBORGHINI ---
  {
    id: "lamborghini-revuelto",
    brand: "Lamborghini",
    model: "Lamborghini Revuelto",
    tagline: "The electrifying 1,001 HP V12 hybrid hypercar redefining the future",
    category: "Supercar Flagship",
    specs: {
      engine: "6.5L Naturally Aspirated V12 + 3 Electric Motors",
      power: "1,001 hp combined",
      acceleration: "0–100 km/h in 2.5s",
      highlight: "Monofuselage carbon-fiber monocoque & Y-shaped LED lighting"
    },
    description: "Lamborghini's revolutionary High Performance Electrified Vehicle (HPEV). It preserves the operatic naturally aspirated 6.5-liter V12 while harnessing triple electric motors for mind-bending thrust.",
    whyILoveIt: "The dramatic Y-shaped motifs, fighter-jet cockpit starter button, iconic scissor doors, and an intoxicating V12 screaming to 9,500 RPM.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used for building applications and solving computational problems.",
    skills: [
      { name: "Java", level: "Primary", iconName: "Coffee", category: "Programming", description: "Object-oriented design, logic building, backend application development" },
      { name: "Python", level: "Primary", iconName: "Code2", category: "Programming", description: "Data manipulation, analytical pipelines, scripting and logic" },
      { name: "SQL", level: "Primary", iconName: "Database", category: "Programming", description: "Relational queries, table joins, schema design and optimization" },
      { name: "JavaScript", level: "Primary", iconName: "Braces", category: "Programming", description: "Modern ES6+, async/await, interactive dynamic web interfaces" }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Creating responsive, accessible, and interactive web experiences.",
    skills: [
      { name: "HTML", level: "Primary", iconName: "Layout", category: "Frontend", description: "Semantic document structure, accessibility, and modern web standards" },
      { name: "CSS", level: "Primary", iconName: "Palette", category: "Frontend", description: "Responsive layouts, Flexbox, Grid, styling systems and transitions" },
      { name: "React.js", level: "Primary", iconName: "Atom", category: "Frontend", description: "Component-driven architecture, reusable UI state, and hook lifecycles" },
      { name: "Node.js", level: "Primary", iconName: "Server", category: "Backend", description: "Server-side JavaScript runtime for event-driven backend workflows" },
      { name: "Express.js", level: "Primary", iconName: "Cpu", category: "Backend", description: "RESTful API routes, middleware, and request/response management" }
    ]
  },
  {
    id: "database-concepts",
    title: "Database and Concepts",
    description: "Data persistence systems, software design paradigms, and algorithmic foundations.",
    skills: [
      { name: "MySQL", level: "Primary", iconName: "Database", category: "Databases", description: "Relational schemas, foreign key constraints, normalized tables" },
      { name: "MongoDB", level: "Primary", iconName: "Layers", category: "Databases", description: "Document-oriented NoSQL collections and JSON-like storage" },
      { name: "DBMS", level: "Primary", iconName: "HardDrive", category: "Concepts", description: "Database management principles, ACID properties, transaction integrity" },
      { name: "OOP", level: "Primary", iconName: "Box", category: "Concepts", description: "Encapsulation, inheritance, polymorphism, and modular class architecture" },
      { name: "DSA", level: "Primary", iconName: "Binary", category: "Concepts", description: "Core data structures, search/sort algorithms, time-space efficiency" },
      { name: "REST APIs", level: "Primary", iconName: "Network", category: "Concepts", description: "Stateless client-server communication, JSON payloads, HTTP endpoints" }
    ]
  },
  {
    id: "data-analytics",
    title: "Data and Analytics",
    description: "Transforming datasets into actionable insights, interactive charts, and business dashboards.",
    skills: [
      { name: "Power BI", level: "Primary", iconName: "BarChart3", category: "Analytics", description: "Interactive dashboards, DAX measures, and executive KPI reporting" },
      { name: "Tableau", level: "Primary", iconName: "PieChart", category: "Analytics", description: "Data exploration worksheets, interactive filters, visual storytelling" },
      { name: "Excel", level: "Primary", iconName: "Sheet", category: "Analytics", description: "Pivot tables, data formatting, VLOOKUP/XLOOKUP, summary formulas" },
      { name: "Pandas", level: "Primary", iconName: "FileSpreadsheet", category: "Analytics", description: "DataFrame data wrangling, cleaning missing values, aggregation" },
      { name: "NumPy", level: "Primary", iconName: "Binary", category: "Analytics", description: "Numerical array computations and mathematical operations" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    description: "Version control platforms and developer workflows for team and project collaboration.",
    skills: [
      { name: "Git", level: "Primary", iconName: "GitBranch", category: "Tools", description: "Local version control, branch workflows, change staging and history" },
      { name: "GitHub", level: "Primary", iconName: "FolderGit2", category: "Tools", description: "Remote repository hosting, code management, issue tracking and commits" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "automatic-timetable-generator",
    title: "Automatic Timetable Generator",
    tagline: "Algorithmic scheduling engine minimizing academic timetable conflicts",
    category: "Full-Stack",
    problem: "Manually building academic schedules for multidisciplinary college departments is notoriously time-consuming and prone to hard conflicts (overlapping faculty, classroom shortages, and student batch overlaps).",
    solution: "Designed a rule-based constraint satisfaction and scheduling algorithm that automatically generates clash-free timetables for courses, faculty, and lecture halls based on configurable constraints.",
    objectives: [
      "Eliminate manual scheduling errors and reduce timetable preparation time from days to minutes.",
      "Respect hard constraints (faculty unavailability, classroom capacity) and optimize soft constraints (balanced study hours).",
      "Provide an exportable, printable matrix view for faculty and student batches."
    ],
    myContributions: [
      "Formulated the constraint-satisfaction scheduling logic using backtracking and heuristic priority assignment.",
      "Developed an interactive web interface allowing administrators to input faculty quotas, subjects, and room allotments.",
      "Implemented instant conflict validation and visual timetable grid rendering."
    ],
    technologies: ["Java / JavaScript", "Data Structures & Algorithms", "HTML5/CSS3", "MySQL", "React"],
    features: [
      "Intelligent clash detection across faculty, rooms, and student cohorts",
      "Configurable input matrices for laboratory hours, theory lectures, and break slots",
      "Instant PDF / Excel export format for departmental distribution",
      "Role-based views for students, professors, and administration"
    ],
    architectureOverview: "Admin Inputs & Constraints → Constraint Validation Engine → Backtracking / Heuristic Slot Allocation Algorithm → Clash Verification Matrix → Interactive Grid Display & Export.",
    challengesAndLearnings: [
      "Handling combinatorial explosion when scheduling many overlapping batches with limited lab rooms.",
      "Deepened understanding of algorithmic optimization and greedy heuristic search strategies."
    ],
    githubUrl: "https://github.com/Sushmavpatil12/Sushmavpatil12",
    liveDemoUrl: "",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metricsOrOutcome: "Reduced timetable generation complexity while guaranteeing 100% collision-free faculty allocations."
  },
  {
    id: "restaurant-management-system",
    title: "Online Restaurant Management System",
    tagline: "End-to-end restaurant billing, order management, and table coordination software",
    category: "Core Engineering",
    problem: "Traditional dining establishments struggle with disconnected order ticketing, slow manual billing calculations, and untracked ingredient consumption during peak dining rush.",
    solution: "Built a robust desktop and backend management application in Java and MySQL that unifies customer table booking, live kitchen order management, automated invoice generation, and sales auditing.",
    objectives: [
      "Streamline food order tracking from table order placement to kitchen ticket generation.",
      "Automate accurate tax and discount billing calculations with instant receipt printing.",
      "Persist customer transaction history and food sales data in a normalized relational database."
    ],
    myContributions: [
      "Engineered the relational database schema in MySQL with 3NF normalization for menu items, orders, tables, and invoices.",
      "Programmed the core object-oriented business logic in Java applying MVC architecture principles.",
      "Designed responsive UI views for order entry, live table status indicators, and daily revenue reports."
    ],
    technologies: ["Java", "MySQL", "JDBC", "OOP Principles", "Swing / JavaFX", "SQL"],
    features: [
      "Live visual table status tracking (Occupied, Reserved, Available)",
      "Dynamic menu cart with real-time tax calculation and discount rules",
      "Automated bill generator with printable invoice formatting",
      "Historical sales report generation for daily and monthly revenue tracking"
    ],
    architectureOverview: "User UI Layer (Java Desktop/Web) ↔ MVC Controller Business Logic ↔ JDBC Connector ↔ Relational Database (MySQL normalized schema).",
    challengesAndLearnings: [
      "Preventing race conditions during concurrent table reservations by implementing SQL transactions with ACID safety.",
      "Mastered clean OOP principles (Inheritance, Polymorphism, Data Encapsulation) and JDBC connection pooling."
    ],
    githubUrl: "https://github.com/Sushmavpatil12/Sushmavpatil12",
    liveDemoUrl: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metricsOrOutcome: "Fully functional transactional database management system with zero billing calculation discrepancies."
  },
  {
    id: "blinkit-sales-analysis",
    title: "Blinkit Sales & Business Performance Analysis",
    tagline: "Interactive Power BI business intelligence dashboard analyzing quick-commerce sales drivers",
    category: "Data Analytics",
    problem: "E-commerce & quick-commerce platforms require granular visibility into item sales distribution, outlet tier performance, and fat-content preferences to optimize regional warehouse stocking.",
    solution: "Created an end-to-end interactive Power BI analytical dashboard that processes Blinkit retail data, calculates key retail metrics using DAX, and delivers clear executive performance insights.",
    objectives: [
      "Analyze overall sales revenue, average transaction value, and item ratings across varied grocery categories.",
      "Evaluate the impact of outlet size, location tier (Tier 1, 2, 3), and establishment year on revenue generation.",
      "Identify high-performing inventory segments to assist in regional supply chain optimization."
    ],
    myContributions: [
      "Cleaned, transformed, and shaped raw grocery sales datasets in Power Query (handled missing values and data type conversions).",
      "Authored custom DAX measures for Total Sales, Average Rating, Item Count, and Average Sales per Outlet.",
      "Constructed visually balanced dashboards with intuitive slicers, KPI summary cards, and regional distribution charts."
    ],
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling", "Business Intelligence"],
    features: [
      "Executive KPI Summary (Total Revenue, Avg Sales, Total Items, Customer Ratings)",
      "Item Fat Content & Item Type breakdown vs. revenue yield",
      "Outlet Tier, Size, and Location matrix comparison",
      "Dynamic multi-parameter filtering for rapid exploratory analysis"
    ],
    architectureOverview: "Raw Excel/CSV Data → Power Query Data Cleaning & Normalization → Star Schema Data Modeling → DAX Measure Formulations → Interactive Executive Power BI Visual Dashboard.",
    challengesAndLearnings: [
      "Formulating complex DAX time-intelligence calculations to compare outlet performance cohorts.",
      "Refined skills in dashboard UI layout, color contrast for accessibility, and avoiding visual chart clutter."
    ],
    githubUrl: "https://github.com/Sushmavpatil12/Sushmavpatil12",
    liveDemoUrl: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metricsOrOutcome: "Delivered interactive business intelligence reporting with structured multi-dimensional drill-downs."
  },
  {
    id: "pollution-complaint-analysis",
    title: "Pollution Complaint Analysis System",
    tagline: "NLP-driven environmental grievance classification and hotspot discovery engine",
    category: "Data Analytics",
    problem: "Municipal authorities and environmental boards receive large volumes of unorganized citizen complaints regarding air, water, and noise pollution, making it slow to triage urgent hotspots.",
    solution: "Developed an intelligent complaint analysis and classification pipeline that parses textual citizen grievances, classifies pollution categories using NLP, and aggregates geo-temporal hotspot insights for decision makers.",
    objectives: [
      "Automate categorization of citizen complaint descriptions into specific environmental domains (Air, Water, Noise, Solid Waste).",
      "Perform sentiment and urgency scoring to prioritize critical ecological hazards.",
      "Provide an intuitive analytics dashboard to pinpoint regional grievance concentrations."
    ],
    myContributions: [
      "Built text preprocessing routines (stopword removal, stemming, TF-IDF vectorization) using Python and NLTK.",
      "Trained classification models with Scikit-learn to automate multi-class category tagging.",
      "Designed dashboard visualizations summarizing weekly complaint frequency and pollution source distribution."
    ],
    technologies: ["Python", "NLP", "Scikit-learn", "Pandas", "Matplotlib", "FastAPI / Flask"],
    features: [
      "Automated complaint text categorization with confidence scoring",
      "Keyword & sentiment extraction for urgent grievance escalation",
      "Interactive data charts highlighting recurrent environmental hotspots",
      "Exportable summary reports for administrative review"
    ],
    architectureOverview: "Raw Complaint Ingestion → Text Preprocessing & Cleaning (Pandas/NLTK) → Feature Extraction (TF-IDF) → ML Classifier (Scikit-learn) → Aggregated Analytics & Visual Dashboard.",
    challengesAndLearnings: [
      "Addressed imbalanced complaint categories by testing oversampling and fine-tuning classification thresholds.",
      "Learned the importance of domain-specific stopword dictionaries for municipal and civic environmental grievance terminology."
    ],
    githubUrl: "https://github.com/Sushmavpatil12/Sushmavpatil12",
    liveDemoUrl: "",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
    featured: true,
    metricsOrOutcome: "Demonstrates applied NLP pipeline from raw unstructured text to actionable municipal intelligence."
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "btech-it",
    degree: "B.Tech in Information Technology",
    institution: "Mukesh Patel School of Technology Management & Engineering (MPSTME), NMIMS University",
    period: "2024 – 2027",
    status: "In Progress",
    highlights: [
      "Core focus on Full-Stack Software Engineering, Relational Database Systems, and Applied Data Analytics.",
      "Active participation in technical projects, algorithm problem solving, and modern web application development.",
      "Maintaining strong academic discipline while exploring emerging cloud and machine learning technologies."
    ]
  },
  {
    id: "polytechnic",
    degree: "Diploma in Computer Engineering",
    institution: "R.C. Patel Polytechnic",
    period: "2021 – 2024",
    status: "Completed",
    highlights: [
      "Built rigorous foundation in Computer Science core: C, C++, Java, Data Structures, OOP, and Operating Systems.",
      "Developed hands-on database projects using MySQL and architected desktop applications.",
      "Graduated with distinction and practical understanding of computing fundamentals."
    ]
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "N.E.S. Girls High School",
    period: "2020 – 2021",
    status: "Completed",
    highlights: [
      "Strong foundation in Mathematics, Science, and Analytical problem solving.",
      "Active participant in academic competitions and school co-curricular initiatives."
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-python-data",
    title: "Python for Data Science & Machine Learning",
    issuer: "Online Certification / Training",
    issueDate: "2024",
    credentialId: "CERT-PY-DS-2024",
    summary: "Comprehensive training covering Python data structures, Pandas data frames, NumPy operations, Matplotlib visualization, and Scikit-learn foundational models.",
    skillsGained: ["Python", "Pandas", "NumPy", "Data Preprocessing", "Supervised ML"],
    icon: "BrainCircuit"
  },
  {
    id: "cert-sql-db",
    title: "Relational Database Design & Advanced SQL",
    issuer: "Technical Training Program",
    issueDate: "2023",
    credentialId: "CERT-SQL-ADV-2023",
    summary: "Hands-on database mastery program covering 3NF normalization, index optimization, complex aggregate joins, subqueries, and stored procedures.",
    skillsGained: ["MySQL", "PostgreSQL", "Database Normalization", "Query Optimization"],
    icon: "Database"
  },
  {
    id: "cert-power-bi",
    title: "Business Intelligence with Microsoft Power BI",
    issuer: "Analytics Learning Track",
    issueDate: "2024",
    credentialId: "CERT-PBI-BI-2024",
    summary: "In-depth dashboard authoring course focusing on DAX functions, Power Query data transformation, star-schema data modeling, and executive KPI storytelling.",
    skillsGained: ["Power BI", "DAX", "Data Modeling", "Business Intelligence"],
    icon: "BarChart3"
  },
  {
    id: "cert-fullstack-dev",
    title: "Full-Stack Web Development Foundations",
    issuer: "Web Engineering Bootcamp",
    issueDate: "2024",
    credentialId: "CERT-FSW-DEV-2024",
    summary: "Practical training in building modern responsive web apps using semantic HTML5, modern CSS/Tailwind, React.js component architecture, and REST API integration with Node.js.",
    skillsGained: ["React.js", "JavaScript ES6+", "Node.js", "REST APIs", "Tailwind CSS"],
    icon: "Code2"
  }
];

export const interestCards: InterestCard[] = [
  {
    id: "automotive-design",
    title: "Automotive Design & Engineering Precision 🏎️",
    subtitle: "Appreciating aerodynamic lines, proportions & mechanical craft",
    category: "Automotive Design",
    description: "Outside my technical interests, I enjoy exploring automotive design, appreciating the engineering behind iconic cars, and discovering the little things that inspire me in machines like BMW, Porsche, and Lamborghini.",
    tags: ["BMW", "Porsche", "Lamborghini", "Aerodynamics", "Industrial Design"],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "ui-ux-craft",
    title: "Creative UI/UX & Aesthetic Interfaces 🌸",
    subtitle: "Turning complex code into intuitive, memorable digital journeys",
    category: "Creativity & Design",
    description: "I love exploring how thoughtful spacing, editorial typography, pastel color palettes, and subtle motion transform functional software into an elevated, enjoyable user experience.",
    tags: ["Editorial Layouts", "Micro-interactions", "Visual Hierarchy", "Design Systems"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "reading-growth",
    title: "Books, Curiosity & Systems Thinking 📖",
    subtitle: "Reading widely to think clearly and build resilient systems",
    category: "Reading & Growth",
    description: "Fascinated by non-fiction literature exploring deliberate habits, mental models, and technology leadership. Reading helps me approach software development with clarity, patience, and perspective.",
    tags: ["Atomic Habits", "Tech Essays", "Continuous Learning", "Mental Models"],
    quote: "Small consistent disciplines compound into remarkable craft over time.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "daily-rituals",
    title: "Tea Rituals & Mindful Wireframing ☕",
    subtitle: "Grounding pauses between coding sprints",
    category: "Daily Rituals",
    description: "Stepping away from the screen with a fresh cup of tea to sketch workflow diagrams on paper. Taking intentional pauses fosters creative clarity and fresh problem-solving angles.",
    tags: ["Mindfulness", "Pen & Paper Wireframing", "Quiet Mornings"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "deep-work-music",
    title: "Lo-Fi Beats & Ambient Soundscapes 🎧",
    subtitle: "The acoustic backdrop to deep coding sessions",
    category: "Music & Focus",
    description: "When architecting database relationships or debugging React render lifecycles, soothing lo-fi beats and neo-classical piano tracks maintain uninterrupted flow.",
    tags: ["Lo-Fi Chill", "Piano & Acoustic", "Deep Focus", "Flow State"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80"
  }
];

export const currentlyExploring: DashboardLearningItem[] = [
  {
    category: "Frontend & Motion",
    title: "Advanced React 19 Patterns & Framer Motion",
    status: "In Active Study",
    notes: "Deepening component composition, layout animations, and accessible state management with zero layout shifts.",
    tags: ["React 19", "Framer Motion", "Tailwind CSS"]
  },
  {
    category: "Backend & Cloud",
    title: "Microservices & Cloud Deployment Foundations",
    status: "Building Practice",
    notes: "Exploring Docker containerization, REST API scalability, and cloud deployments on GCP and AWS.",
    tags: ["Docker", "GCP", "PostgreSQL", "API Security"]
  },
  {
    category: "Data & Intelligence",
    title: "Applied Transformers & Generative AI Pipelines",
    status: "In Active Study",
    notes: "Studying embeddings, prompt engineering, and connecting LLM reasoning capabilities with Python backend services.",
    tags: ["Transformers", "Hugging Face", "Vector Search"]
  },
  {
    category: "Career Milestone",
    title: "Software Engineering & Analytics Internship",
    status: "Goal 2026",
    notes: "Seeking an engineering internship where I can contribute to high-impact software systems and learn from senior engineers.",
    tags: ["Full-Stack Intern", "Data Analyst Intern", "Continuous Growth"]
  }
];

export const personalValues = [
  {
    title: "Intentional Logic",
    description: "Every function and architecture choice should solve a genuine user requirement with clarity and maintainability."
  },
  {
    title: "Aesthetic Craftsmanship",
    description: "Technology should feel joyful and inspiring. High visual appeal, comfortable typography, and smooth feedback matter."
  },
  {
    title: "Relentless Curiosity",
    description: "Embracing complex problems with humility, continuous experimentation, and a steady eagerness to learn new paradigms."
  },
  {
    title: "Authentic Dedication",
    description: "Taking pride in clean code, disciplined Git commits, honest communication, and attention to subtle details."
  }
];
