import { Project, NavItem, Publication, Experience, Education, SkillCategory, Hackathon, Certificate } from './types.ts';
import { Linkedin, Mail } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Competitions', href: '#hackathons' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Vision AI Assistant",
    description: "A real-time interactive perception system integrating CV, ASR, and TTS. Achieved 24–30 FPS live inference with 40% lower latency via on-device reasoning.",
    tags: ["Computer Vision", "ASR", "TTS", "Real-time"],
    year: "2025",
    link: "https://visionai-d7b31.web.app/"
  },
  {
    id: 2,
    title: "Automated AI Interviewer",
    description: "Gemini-powered Agentic AI interviewer extracting 20+ behavioral features. Reduced screening time by 70% with >95% schema validity in automated reports.",
    tags: ["Gemini API", "Agentic AI", "GenAI"],
    year: "2025"
  },
  {
    id: 3,
    title: "Writer’s Co-Pilot",
    description: "An NLP enhancement tool using BERT/GPT. Improved semantic coherence by 22% and reduced grammatical errors by 41%.",
    tags: ["NLP", "BERT", "GPT", "React"],
    year: "2024"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Teaching Assistant",
    company: "Datta Meghe College of Engineering",
    location: "Navi Mumbai, India",
    period: "Aug 2024 – May 2025",
    description: [
      "Supported 50+ students in Deep Learning coursework, enhancing understanding of PyTorch and TensorFlow workflows.",
      "Conducted weekly lab sessions, code debugging, and technical mentorship on CNNs, RNNs, and model optimization.",
      "Mentored student projects in Computer Vision and NLP, leading to 15+ successful implementations.",
      "Assisted in lab setup and troubleshooting for GPU-accelerated training environments."
    ]
  }
];

export const RESEARCH: Project[] = [
  {
    id: 101,
    title: "Federated Histopathology Detection",
    description: "Developed a federated learning system using FLWR. Built a hybrid ViT + CNN achieving 84% accuracy with 18% faster convergence and 15% lower client drift.",
    tags: ["Federated Learning", "ViT", "Medical AI"],
    year: "2025",
    link: "https://pathoplus-woad.vercel.app/"
  },
  {
    id: 102,
    title: "Surgical Workflow Intelligence",
    description: "Built a multimodal OR phase-recognition model combining video, telemetry, and audio. Engineered a 3D CNN + MLP achieving 0.63 F1-score.",
    tags: ["Multimodal AI", "3D CNNs", "Healthcare"],
    year: "2025"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 201,
    title: "Vision AI: An Interactive Perception System",
    journal: "International Research Journal of Engineering (IRJET)",
    link: "https://www.irjet.net/archives/V12/i5/IRJET-V12I584.pdf",
    year: "2024"
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    school: "Stevens Institute of Technology",
    degree: "Master of Science in Applied Artificial Intelligence",
    location: "Hoboken, NJ",
    period: "2025 – Present",
    coursework: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Machine Learning Operations"]
  },
  {
    id: 2,
    school: "Datta Meghe College of Engineering",
    degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
    location: "Mumbai, India",
    period: "2022 – 2025",
    grade: "GPA: 3.5/4.0", 
    coursework: ["Data Structures & Algorithms", "Database Management", "Operating Systems", "Artificial Intelligence"]
  },
  {
    id: 3,
    school: "Vivekanand Education Society's Polytechnic",
    degree: "Engineering Diploma, Civil Engineering",
    location: "Mumbai, India",
    period: "2019 – 2022",
    grade: "Grade: 90%"
  }
];

export const HACKATHONS: Hackathon[] = [
  {
    id: 0,
    name: "Hack the Clock",
    project: "AI Recruitment Platform",
    achievement: "Winner (1st Place)",
    date: "2025",
    location: "Hoboken, NJ",
    description: "Won 1st Place for building a complete AI-powered recruitment platform in just 12 hours. The system automated resume screening, AI-driven interviews, real-time emotion analysis, and unified all candidate data into a single dashboard. Delivered an end-to-end solution for the “AI for Workforce & HR” track.",
    techStack: ["React", "Emotion Analysis", "GenAI", "Computer Vision"]
  },
  {
    id: 3,
    name: "AI Spark Intra Department Project Competition",
    project: "Writer’s CoPilot",
    achievement: "3rd Prize",
    date: "Apr 2024",
    location: "Mumbai, India",
    description: "Showcased an NLP-based project named “Writer’s CoPilot” that helps authors and publishers summarize content and provides AI-assisted writing with single prompts on new or existing ideas.",
    techStack: ["NLP", "BERT", "Generative AI", "React"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    name: "Building AI on Jetson Nano",
    issuer: "NVIDIA",
    date: "Aug 2025",
    skills: ["Jetson Nano", "CUDA Memory Allocation", "Large Language Models (LLMs)", "LLMOps"],
    link: "#"
  },
  {
    id: 2,
    name: "Computer Vision",
    issuer: "OpenCV",
    date: "Feb 2025",
    skills: ["Object Detection", "Scikit-Learn (SKLearn)", "Pattern Recognition", "CNN with AdaBoost", "XGBoost"],
    link: "#"
  },
  {
    id: 3,
    name: "HackHive Hackathon",
    issuer: "SHAIDS DMCE",
    date: "Feb 2025",
    description: "Developed a web-based platform providing real-time crop price predictions to enable farmers and buyers to trade fairly without intermediaries.",
    skills: ["Model Training", "Prediction Markets"],
    link: "#"
  },
  {
    id: 4,
    name: "Applied Deep Learning with Python",
    issuer: "IBM",
    date: "Aug 2024",
    skills: ["Reinforcement Learning", "CNNs", "RNNs", "Random Forests", "Hidden Markov Models", "PyTorch", "NumPy", "SciPy", "Keras", "TensorFlow"],
    link: "#"
  },
  {
    id: 5,
    name: "Machine Learning Essentials",
    issuer: "Microsoft",
    date: "May 2024",
    skills: ["Machine Learning", "Regression Analysis", "Decision Trees", "Feature Engineering", "Model Development & Training"],
    link: "#"
  },
  {
    id: 6,
    name: "Python Coder (GPYC)",
    issuer: "GIAC Certifications",
    date: "Jan 2024",
    skills: ["Python", "Pandas", "Seaborn", "Data Preparation", "k-means Clustering"],
    link: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Agentic AI", "PyTorch", "TensorFlow", "Computer Vision", "NLP", "Generative AI", "LLMs", "RAG", "Scikit-learn"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Kubernetes", "AWS", "Git", "Linux", "Gemini API", "Jupyter"]
  },
  {
    title: "Web & Frameworks",
    skills: ["React", "Node.js", "Tailwind CSS", "FastAPI", "Flask"]
  }
];

export const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com/in/atharva2004", label: "LinkedIn" },
  { icon: Mail, href: "mailto:asawant10@stevens.edu", label: "Email" },
];