export interface SkillItem {
  name: string;
  level: 'Primary' | 'Working Knowledge' | 'Exploring';
  iconName: string;
  category: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Data Analytics' | 'Core Engineering';
  problem: string;
  solution: string;
  objectives: string[];
  myContributions: string[];
  technologies: string[];
  features: string[];
  architectureOverview: string;
  challengesAndLearnings: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  featured: boolean;
  metricsOrOutcome?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  grade?: string;
  highlights: string[];
  status: 'In Progress' | 'Completed';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  summary: string;
  skillsGained: string[];
  icon: string;
}

export interface CarItem {
  id: string;
  brand: 'BMW' | 'Porsche' | 'Lamborghini';
  model: string;
  tagline: string;
  category: 'Supercar Flagship' | 'Track Precision' | 'Grand Tourer' | 'Sports Coupé' | 'Super SUV';
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    highlight: string;
  };
  description: string;
  whyILoveIt: string;
  image: string;
}

export interface InterestCard {
  id: string;
  title: string;
  subtitle: string;
  category: 'Automotive Passion' | 'Automotive Design' | 'Creativity & Design' | 'Reading & Growth' | 'Music & Mood' | 'Music & Focus' | 'Travel & Wonder' | 'Daily Rituals';
  description: string;
  tags: string[];
  quote?: string;
  image?: string;
}

export interface DashboardLearningItem {
  category: string;
  title: string;
  status: 'In Active Study' | 'Building Practice' | 'Goal 2026';
  notes: string;
  tags: string[];
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}
