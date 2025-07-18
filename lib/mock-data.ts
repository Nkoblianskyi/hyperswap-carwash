import {
  Car,
  Home,
  Sparkles,
  Droplets,
  Users,
  Award,
  Clock,
  Heart,
  Target,
  Eye,
  Zap,
  Shield,
  Leaf,
  Wrench,
  Lightbulb,
  Globe,
  Sun,
  Snowflake,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react"

// Company Information
export const companyInfo = {
  name: "HyperSwap",
  tagline: "Professional Car Wash",
  description:
    "The best service for your vehicle. Hand wash, mobile wash, classic wash and professional car detailing.",
  phone: "06 24 68 52 12",
  email: "info@hyperswap.com",
  privacyEmail: "privacy@hyperswap.com",
  address: "22 rue Joseph Cugnot, 66000 Perpignan",
  workingHours: "Mon-Sun: 08:00 - 22:00",
  foundedYear: 2014,
}

// Company Statistics
export const companyStats = [
  {
    icon: Users,
    value: "500+",
    label: "Satisfied Customers",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Customer Support",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Quality Guarantee",
  },
]

// Services Data
export const services = [
  {
    id: "hand-wash",
    title: "Hand Wash",
    description: "Delicate hand washing using premium products and soft materials for maximum paint protection.",
    shortDescription: "Delicate hand washing using premium products and soft materials.",
    icon: Droplets,
    duration: "45-60 minutes",
    image: "/48156d0b461632742767c7b953ebdf62.jpg",
    features: [
      "Pre-rinse under pressure",
      "Hand washing with premium foam",
      "Detailed wheel and arch cleaning",
      "Quality microfiber drying",
      "Protective wax application",
      "Interior and exterior glass cleaning",
      "Dashboard wiping",
      "Threshold cleaning",
    ],
    shortFeatures: ["Hand body washing", "Wheel cleaning", "Microfiber drying", "Protective wax"],
    process: [
      "Car inspection and problem area identification",
      "Pre-rinse to remove dust",
      "Special foam application to body",
      "Hand washing with soft gloves",
      "Detailed wheel and arch cleaning",
      "Thorough rinsing",
      "Microfiber drying without streaks",
      "Protective wax application",
    ],
    benefits: [
      "Maximum paint coating preservation",
      "Individual approach to each car",
      "Premium product usage",
      "Detailed attention to all elements",
      "Protection from external factors",
    ],
  },
  {
    id: "mobile-wash",
    title: "Mobile Wash",
    description: "Professional car wash at your convenient location and time. We come with all necessary equipment.",
    shortDescription: "Professional car wash at your convenient location and time.",
    icon: Home,
    duration: "60-90 minutes",
    image: "/c746b633f4db61206a88a95005e67835.jpg",
    features: [
      "On-site service at convenient time",
      "Complete professional equipment",
      "Own water supply (300L)",
      "Eco-friendly cleaning products",
      "Water-independent washing",
      "Interior cleaning",
      "Floor mat cleaning",
      "Flexible working hours",
    ],
    shortFeatures: ["On-site service", "Complete equipment", "Eco-friendly products", "Flexible schedule"],
    process: [
      "Time and location coordination",
      "Arrival with complete equipment set",
      "Workspace preparation",
      "Professional car washing",
      "Interior cleaning",
      "Final quality check",
      "Workspace cleanup",
    ],
    benefits: [
      "Time saving",
      "Convenient location washing",
      "Flexible schedule",
      "Professional equipment",
      "Eco-friendly process",
    ],
  },
  {
    id: "classic-wash",
    title: "Classic Wash",
    description: "Standard quality wash with all necessary procedures to maintain your car's cleanliness.",
    shortDescription: "Standard quality wash with all necessary procedures.",
    icon: Car,
    duration: "30-45 minutes",
    image: "/9db1b8e3757020600ffaf41ef47bbc64.jpg",
    features: [
      "High-pressure body washing",
      "Exterior and interior glass cleaning",
      "Interior vacuuming",
      "Dashboard wiping",
      "Floor mat cleaning",
      "Basic wheel cleaning",
      "Threshold wiping",
      "Fast and quality service",
    ],
    shortFeatures: ["Body washing", "Glass cleaning", "Interior vacuuming", "Dashboard wiping"],
    process: [
      "Pre-rinse",
      "Washing foam application",
      "Pressure washing",
      "Glass cleaning",
      "Interior vacuuming",
      "Surface wiping",
      "Final rinse",
    ],
    benefits: [
      "Service speed",
      "Optimal price-quality ratio",
      "Regular car care",
      "Cleanliness maintenance",
      "Daily use convenience",
    ],
  },
  {
    id: "detailing",
    title: "Car Detailing",
    description: "Deep interior cleaning and professional body treatment to restore your car's original appearance.",
    shortDescription: "Deep interior cleaning and professional body treatment.",
    icon: Sparkles,
    duration: "2-4 hours",
    image: "/4616170d91005a859ff7e75555b21281.jpg",
    features: [
      "Deep fabric seat cleaning",
      "Professional leather surface cleaning",
      "Detailed carpet and upholstery cleaning",
      "Multi-stage body polishing",
      "Long-lasting protective coating application",
      "Engine bay cleaning",
      "Plastic element restoration",
      "Trunk cleaning",
    ],
    shortFeatures: ["Seat cleaning", "Carpet cleaning", "Body polishing", "Protective coating"],
    process: [
      "Detailed inspection and condition assessment",
      "Removable element disassembly",
      "Seat and upholstery cleaning",
      "All interior surface cleaning",
      "Multi-stage body polishing",
      "Protective coating application",
      "Assembly and final inspection",
    ],
    benefits: [
      "Complete car restoration",
      "Complex stain removal",
      "Long-lasting protection",
      "Car value increase",
      "Professional results",
    ],
  },
]

// Washing Techniques
export const techniques = [
  {
    title: "Two-Phase Washing",
    description: "First we remove dirt with foam, then thoroughly rinse with clean water.",
    icon: Zap,
  },
  {
    title: "Touchless Technology",
    description: "We use special products that dissolve dirt without mechanical impact.",
    icon: Shield,
  },
  {
    title: "Eco-Friendly Products",
    description: "All cleaning products are biodegradable and safe for the environment.",
    icon: Leaf,
  },
  {
    title: "Fast Service",
    description: "Optimized processes allow quality car washing in minimal time.",
    icon: Clock,
  },
]

// Company Values
export const companyValues = [
  {
    icon: Target,
    title: "Quality Above All",
    description:
      "We never compromise on the quality of our services and materials used. Every vehicle receives meticulous attention to detail.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Every customer is special to us. We listen to your wishes and needs, adapting our services to exceed expectations.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "We notice and pay attention to even the smallest details of your car, ensuring comprehensive care for every component.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We constantly improve our methods and implement new technologies to stay at the forefront of car care excellence.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent, dependable service that you can trust. We deliver on our promises every single time.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "Committed to eco-friendly practices and sustainable solutions that protect both your car and the environment.",
  },
]

// Company Expertise
export const companyExpertise = [
  {
    icon: Wrench,
    title: "Advanced Equipment",
    description:
      "State-of-the-art washing systems, pressure equipment, and specialized tools for every type of vehicle care.",
    details: [
      "High-pressure washing systems",
      "Professional-grade vacuum equipment",
      "Steam cleaning technology",
      "Specialized detailing tools",
    ],
  },
  {
    icon: Lightbulb,
    title: "Technical Knowledge",
    description:
      "Deep understanding of automotive materials, paint systems, and the science behind effective car care.",
    details: [
      "Paint protection expertise",
      "Material-specific cleaning methods",
      "Chemical compatibility knowledge",
      "Surface restoration techniques",
    ],
  },
  {
    icon: Globe,
    title: "Industry Standards",
    description: "We follow international best practices and maintain certifications in professional automotive care.",
    details: [
      "International quality standards",
      "Certified cleaning procedures",
      "Safety protocol compliance",
      "Environmental regulations adherence",
    ],
  },
]

// Company Milestones
export const companyMilestones = [
  {
    year: "2014",
    title: "Foundation",
    description: "Started as a small car wash with a vision to revolutionize automotive care in our community.",
  },
  {
    year: "2016",
    title: "Service Expansion",
    description: "Introduced mobile washing services and professional detailing, expanding our reach and capabilities.",
  },
  {
    year: "2018",
    title: "Technology Upgrade",
    description: "Invested in advanced equipment and eco-friendly cleaning systems, setting new industry standards.",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Launched online booking system and customer management platform for enhanced service experience.",
  },
  {
    year: "2022",
    title: "Sustainability Focus",
    description: "Implemented comprehensive environmental program with water recycling and biodegradable products.",
  },
  {
    year: "2024",
    title: "Excellence Recognition",
    description: "Achieved industry recognition for service quality and customer satisfaction excellence.",
  },
]

// Car Care Concepts
export const careConcepts = [
  {
    icon: Shield,
    title: "Paint Protection",
    description:
      "Regular washing and waxing creates a protective barrier against UV rays, road salt, and environmental contaminants.",
  },
  {
    icon: TrendingUp,
    title: "Value Preservation",
    description: "A well-maintained, clean vehicle retains significantly more resale value compared to neglected cars.",
  },
  {
    icon: Clock,
    title: "Longevity Enhancement",
    description:
      "Consistent cleaning prevents corrosion, rust, and premature wear of both exterior and interior components.",
  },
  {
    icon: Sparkles,
    title: "Health & Hygiene",
    description:
      "Interior cleaning eliminates bacteria, allergens, and odors, creating a healthier driving environment.",
  },
]

// Seasonal Care Tips
export const seasonalCare = [
  {
    icon: Sun,
    season: "Summer Care",
    tips: [
      "Frequent washing to remove tree sap and bird droppings",
      "UV protection through quality wax and interior treatments",
      "Air conditioning system cleaning for optimal performance",
    ],
  },
  {
    icon: Snowflake,
    season: "Winter Care",
    tips: [
      "Regular undercarriage washing to remove road salt",
      "Interior protection from wet boots and clothing",
      "Headlight cleaning for maximum visibility",
    ],
  },
]

// Car Care Facts
export const careFactsData = [
  {
    icon: CheckCircle,
    text: "A clean car can improve fuel efficiency by up to 10%",
  },
  {
    icon: CheckCircle,
    text: "Regular waxing can extend paint life by 5-7 years",
  },
  {
    icon: CheckCircle,
    text: "Professional cleaning can increase resale value by 15-20%",
  },
]

// Company Promise
export const companyPromise = [
  {
    icon: Star,
    text: "Exceptional service quality",
  },
  {
    icon: Shield,
    text: "Complete satisfaction guarantee",
  },
  {
    icon: Leaf,
    text: "Environmentally responsible practices",
  },
  {
    icon: TrendingUp,
    text: "Continuous improvement and innovation",
  },
]

// Hero Features
export const heroFeatures = [
  {
    icon: Car,
    text: "Professional Equipment",
  },
  {
    icon: Sparkles,
    text: "Eco-Friendly Products",
  },
  {
    icon: Shield,
    text: "Quality Guarantee",
  },
]

// Professional vs DIY Benefits
export const professionalBenefits = [
  "Professional-grade equipment and products",
  "Expertise in material-specific care",
  "Time-efficient comprehensive service",
  "Damage prevention through proper technique",
]

// Maintenance Schedule
export const maintenanceSchedule = [
  {
    frequency: "Weekly",
    task: "Basic wash and interior wipe-down",
  },
  {
    frequency: "Monthly",
    task: "Deep clean and wax application",
  },
  {
    frequency: "Quarterly",
    task: "Professional detailing service",
  },
  {
    frequency: "Seasonally",
    task: "Specialized treatments for weather protection",
  },
]

// Navigation Links
export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
]

// Footer Links
export const footerLinks = {
  services: services.map((service) => ({
    href: `/services/${service.id}`,
    label: service.title,
  })),
  company: [
    { href: "/about", label: "About Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
}

// Contact Information
export const contactInfo = [
  {
    icon: "Phone",
    value: companyInfo.phone,
  },
  {
    icon: "Mail",
    value: companyInfo.email,
  },
  {
    icon: "MapPin",
    value: companyInfo.address,
  },
  {
    icon: "Clock",
    value: companyInfo.workingHours,
  },
]
