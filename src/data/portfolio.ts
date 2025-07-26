// Portfolio data extracted from JSON for easy management
export const portfolioData = {
  personal: {
    name: "Dmitry Soltaganov",
    location: "Oslo, Norway",
    email: "dmitrysoltaganov@gmail.com", 
    phone: "+47 455 05 839",
    github: "https://github.com/dimassolt",
    portfolioLinks: {
      "GoSki": "https://osloskikurs.no/",
      "GoHike": "https://gohikeoslo.web.app/"
    },
    summary: "Product-focused developer and data scientist with experience in fullstack development, API design, and data-driven decision‑making. Passionate about building clean solutions that deliver real‑world value.",
    personality: [
      "Active in nature",
      "Enjoys skiing, hiking, and building digital tools", 
      "Product-minded",
      "Team-oriented"
    ],
    languages: [
      "Norwegian (fluent)",
      "English (fluent)", 
      "Russian (native)"
    ]
  },

  skills: {
    "Programming Languages": ["Python", "JavaScript", "Kotlin", "Java", "TypeScript", "HTML/CSS"],
    "Frontend": ["React", "Next.js", "Jetpack Compose", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "FastAPI", "RestAPI"],
    "Databases": ["PostgreSQL", "MongoDB", "Neo4j", "Fuseki", "Snowflake"],
    "Cloud & Tools": ["Docker", "Firebase", "Google Cloud", "GitHub Actions", "Stripe", "Google Analytics"],
    "Data & Query": ["SPARQL", "RML", "Streamlit"]
  },

  projects: [
    {
      name: "Volkswagen x UiO – Knowledge Graph & Logistics Dashboard",
      role: "Data Scientist & Fullstack Developer",
      technologies: ["Docker", "Python", "SPARQL", "Streamlit", "Neo4j", "Fuseki", "FastAPI", "RML"],
      description: "Built a containerized data platform for analyzing logistics and CO₂ emissions using semantic web technologies. Developed ETL pipelines and created an interactive dashboard in Streamlit.",
      type: "research"
    },
    {
      name: "GoSki Oslo", 
      role: "IT Specialist & Co-founder",
      technologies: ["JavaScript", "Squarespace", "Google Analytics", "Stripe", "Zapier", "Slack"],
      description: "Created the website, booking system, automation tools, and analytics dashboards for a ski school business. Improved conversions by analyzing customer behavior and automating notifications.",
      type: "business",
      link: "https://osloskikurs.no/"
    },
    {
      name: "GoHike Oslo",
      role: "Fullstack Developer", 
      technologies: ["Next.js", "Tailwind CSS", "Firebase Hosting", "Google Cloud"],
      description: "Built a web application for booking guided forest hikes. Designed a mobile-friendly UI, integrated a booking widget, and deployed the project using SSR on Firebase.",
      type: "web",
      link: "https://gohikeoslo.web.app/"
    },
    {
      name: "Ocean Alert App",
      role: "Android Developer",
      technologies: ["Kotlin", "Jetpack Compose", "Ktor", "GitHub"], 
      description: "Developed an Android app for boaters using Jetpack Compose. Integrated marine weather data from MET APIs. The app helps with alerting users about sea conditions in the Oslofjord area.",
      type: "mobile"
    },
    {
      name: "Ski and Pole Length Calculator",
      role: "Frontend Developer",
      technologies: ["JavaScript", "HTML", "CSS"],
      description: "Created a web-based calculator to help users choose correct ski and pole lengths. Integrated into GoSki Oslo website and used by over 5000 visitors.",
      type: "tool"
    }
  ],

  experience: [
    {
      role: "Data Scientist & Fullstack Developer",
      organization: "Volkswagen x University of Oslo (Research)",
      period: "March 2025 – Present",
      responsibilities: [
        "Built Docker-based data platform for logistics analysis",
        "Developed ETL pipelines and visualized results in Streamlit", 
        "Integrated SPARQL endpoints and FastAPI services",
        "Modeled semantic data and implemented RML pipelines"
      ],
      current: true
    },
    {
      role: "Group Teacher (IN2000)",
      organization: "University of Oslo", 
      period: "January 2025 – Present",
      responsibilities: [
        "Supervised student teams in software engineering projects",
        "Taught agile development and Kotlin/Jetpack Compose",
        "Held presentations on frameworks and best practices"
      ],
      current: true
    },
    {
      role: "IT Specialist",
      organization: "GoSki Oslo",
      period: "August 2023 – June 2025", 
      responsibilities: [
        "Developed website and booking systems",
        "Automated customer follow-up and marketing analytics",
        "Visualized customer journeys using Google Analytics and Stripe",
        "Set up cloud infrastructure using AWS and Firebase"
      ]
    }
  ],

  certifications: [
    "HubSpot SEO II",
    "HubSpot SEO", 
    "Google Ads",
    "HubSpot CRM"
  ],

  education: {
    program: "Informatics: Digital Economics and Leadership, University of Oslo",
    programSkills: [
      "Analyze and communicate technological development and its business implications",
      "Bridge technical and business domains with interdisciplinary understanding", 
      "Identify innovation potential and signs of technological disruption",
      "Develop strategic and organizational insight in tech-enabled enterprises"
    ]
  }
};
