
// Job listings data for the application
export type JobListing = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  experience: string;
  skills: string[];
  logo: string;
  logoColor: string;
  image: string;
  description: string;
  responsibilities: string[];
  requiresVideoResume: boolean;
};

// Mock job data - in a real app this would come from an API
export const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp Nepal",
    location: "Kathmandu, Nepal",
    salary: "₹1.2 lakhs - ₹1.5 lakhs",
    type: "Full-time",
    posted: "2 days ago",
    experience: "5+ years",
    skills: ["React", "TypeScript", "Redux", "Node.js"],
    logo: "T",
    logoColor: "#56c1ff",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "We are looking for an experienced React developer to join our team. You will be responsible for building and maintaining our web applications.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance",
      "Collaborate with the design team to implement UI/UX features"
    ],
    requiresVideoResume: true
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignStudio Nepal",
    location: "Pokhara, Nepal",
    salary: "₹90k - ₹1.1 lakhs",
    type: "Full-time",
    posted: "1 week ago",
    experience: "3+ years",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
    logo: "D",
    logoColor: "#004d80",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Looking for a talented UX/UI designer to create beautiful and functional interfaces for our clients.",
    responsibilities: [
      "Create user-centered designs by understanding business requirements",
      "Translate requirements into style guides, design systems, design patterns and attractive user interfaces",
      "Create original graphic designs (e.g. images, sketches and tables)",
      "Prepare and present rough drafts to stakeholders",
      "Identify and troubleshoot UX problems (e.g. responsiveness)"
    ],
    requiresVideoResume: false
  },
  {
    id: 3,
    title: "Product Manager",
    company: "ProductLabs Nepal",
    location: "Lalitpur, Nepal",
    salary: "₹1.3 lakhs - ₹1.6 lakhs",
    type: "Full-time",
    posted: "3 days ago",
    experience: "4+ years",
    skills: ["Product Strategy", "Roadmapping", "Agile", "User Stories"],
    logo: "P",
    logoColor: "#6366f1",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "Join our team as a Product Manager to lead our product development efforts and ensure we're building the right solutions for our customers.",
    responsibilities: [
      "Define the product vision, strategy, and roadmap",
      "Gather and analyze feedback from customers, stakeholders and potential users",
      "Work closely with engineering teams to deliver features",
      "Define product features according to customer needs",
      "Lead the product development lifecycle from conception to launch"
    ],
    requiresVideoResume: true
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "WebWizards Nepal",
    location: "Bhaktapur, Nepal",
    salary: "₹80k - ₹1 lakh",
    type: "Contract",
    posted: "Just now",
    experience: "2+ years",
    skills: ["JavaScript", "HTML", "CSS", "React"],
    logo: "W",
    logoColor: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description: "We're looking for a Frontend Developer to help build responsive and interactive web applications for our clients.",
    responsibilities: [
      "Implement responsive designs that work across various screen sizes",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with back-end developers and web designers",
      "Develop new user-facing features",
      "Build reusable code for future use"
    ],
    requiresVideoResume: false
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech Nepal",
    location: "Kathmandu, Nepal",
    salary: "₹1.1 lakhs - ₹1.4 lakhs",
    type: "Full-time",
    posted: "5 days ago",
    experience: "3+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    logo: "C",
    logoColor: "#ec4899",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    description: "Join our DevOps team to help build and maintain our cloud infrastructure and deployment pipelines.",
    responsibilities: [
      "Build and implement CI/CD pipelines",
      "Automate infrastructure deployment using IaC tools",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices",
      "Collaborate with development teams to improve deployment processes"
    ],
    requiresVideoResume: true
  }
];
