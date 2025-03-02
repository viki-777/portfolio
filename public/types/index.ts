export interface AboutData {
    _id: string;
    aboutText: string;
    section: string;
    aboutImage: string ;
    aboutHoverImage: string;
  }
  
  export interface HeroData {
    _id: string;
    section: string;
    typewriter: string[];
    title: string;
    heroImage: string;
  }
  
  export interface Certification {
    name: string;
    link: string;
    provider: string;
    offeredBy: string;
    logo: string;
    status: string;
    learnPoints: string[];
  }
  
  export interface CertificationsData {
    _id: string;
    section: string;
    certData: Certification[];
  }
  
  export interface Skill {
    skillName: string;
    proficiency: string;
    imageLink: string;
  }
  
  export interface SkillsData {
    _id: string;
    section: string;
    skillData: Skill[];
  }
  
  export interface Project {
    projectName: string;
    projectDesc: string;
    projectImage: string;
    projectLink: string;
    projectDuration: string;
    githubLink: string;
    techStack: { name: string; url: string }[];
  }
  
  export interface ProjectsData {
    _id: string;
    section: string;
    projectsData: Project[];
  }
  
  export interface HeaderData {
    _id: string;
    section: string;
    linkedin: string;
    twitter: string;
    github: string;
    instagram: string;
    resume: string;
    whatsapp: string;
    mail: string;
  }