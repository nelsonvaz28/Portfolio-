/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const NELSON_INFO = {
  name: "Nelson Vaz",
  roles: ["Data Analyst", "Python Developer", "SQL Enthusiast", "Power BI Specialist", "Web Developer"],
  tagline: "Turning raw data into meaningful insights",
  email: "vaznelson85@gmail.com",
  phone: "+91 9136756979",
  whatsapp: "919136756979",
  linkedin: "https://www.linkedin.com/in/nelson-vaz",
  github: "https://github.com/nelsonvaz", // Update with your actual github if different
  cvPath: "/Nelson_Cv1.pdf",
};

export const SKILLS = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 90, keywords: ["NumPy", "Pandas", "Matplotlib"] },
      { name: "SQL", level: 85, keywords: ["MySQL", "Query Optimization"] },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Data Tools",
    items: [
      { name: "Power BI", level: 88 },
      { name: "Excel", level: 92, keywords: ["Automation", "VBA"] },
      { name: "Google Sheets", level: 90 },
    ],
  },
];

export const PROJECTS = [
  {
    id: "car-sales",
    title: "Car Sales Data Analysis",
    description: "Comprehensive analysis of car sales trends and predictive insights using Python and Power BI.",
    tools: ["Python", "Pandas", "Power BI", "Matplotlib"],
    insights: [
      "Identified 15% increase in SUV demand Q3-Q4",
      "Optimized inventory allocation based on regional sales velocity",
      "Dynamic dashboard with 10+ interactive visualizations",
    ],
    chartData: [
      { month: 'Jan', sales: 4000, growth: 2400 },
      { month: 'Feb', sales: 3000, growth: 1398 },
      { month: 'Mar', sales: 2000, growth: 9800 },
      { month: 'Apr', sales: 2780, growth: 3908 },
      { month: 'May', sales: 1890, growth: 4800 },
      { month: 'Jun', sales: 2390, growth: 3800 },
    ],
  },
  {
    id: "travellera",
    title: "Travel & Tourism Website (Travellera)",
    description: "A feature-rich booking platform for global tourism with seamless UI and Django backend.",
    tools: ["HTML", "CSS", "Python", "Django", "PostgreSQL"],
    features: ["Secure Booking System", "Dynamic Packages Explorer", "Admin Dashboard", "User Authentication"],
    mockupImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Data Visualization",
    org: "Anudip Foundation",
    icon: "BarChart",
  },
  {
    title: "Python Programming",
    org: "Anudip Foundation",
    icon: "Code",
  },
  {
    title: "SQL Module",
    org: "Internal Certification",
    icon: "Database",
  },
  {
    title: "Power BI Simulation",
    org: "Forage",
    icon: "AppWindow",
  },
  {
    title: "Data Analytics Simulation",
    org: "Forage",
    icon: "PieChart",
  },
];

export const EXPERIENCE = [
  {
    role: "Warehouse & Inventory Assistant",
    company: "Practical Exposure",
    period: "Previous Experience",
    points: [
      "Managed large-scale inventory data with zero reporting errors.",
      "Optimized warehouse stock tracking through spreadsheet automation.",
      "Coordinated between logistics and data management teams.",
    ],
  },
];
