export interface ConsultingOffering {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration?: string;
  price?: string;
}

export const consultingOfferings: ConsultingOffering[] = [
  {
    title: "Fractional Marketing Lead",
    subtitle: "Brand Building expertise to drive growth without the cost and commitment of a full-time hire",
    description: "Strategic Marketing leadership, brand building expertise, and implementation help for growing startups that need experienced guidance without the full-time commitment.",
    features: [
      "Marketing Strategy (positioning, messaging, narrative, content)",
      "Program Management",
      "Team Leadership and Mentoring",
      "Budget Planning and Management", 
      "Performance Tracking and Reporting"
    ],
    duration: "4-12 month engagement",
    price: "$5,000/month"
  },
  {
    title: "Develop Positioning & Messaging",
    subtitle: "Define your unique position in the market and stand out with messaging that truly resonates",
    description: "Align your value propositions with customer needs and create a cohesive message architecture. Establish a strong foundation for impactful marketing and sales efforts.",
    features: [
      "Competitive Analysis & Market Context",
      "Value Proposition Development",
      "Message Architecture Creation",
      "Stakeholder Alignment & Buy In",
      "Implementation Plan"
    ],
    duration: "3-4 week project",
    price: "$3,500"
  },
  {
    title: "Craft a Content Strategy & Plan",
    subtitle: "Engage your market with purposeful content that drives results across the buying journey",
    description: "Create a content roadmap that speaks to your audience's needs and turn your content into a growth engine. Ensure that your content resonates and attracts the right audience.",
    features: [
      "Content Strategy & Roadmap",
      "Topic Ideation Framework",
      "Content Calendar Creation",
      "SEO Alignment",
      "Distribution Strategy"
    ],
    duration: "3-4 Week Project",
    price: "$2,500"
  },
  {
    title: "Create a Marketing Budget",
    subtitle: "Allocate your resources wisely and maximize marketing ROI",
    description: "Create a comprehensive marketing budget and financial roadmap that aligns with business objectives, optimizes resources and supports growth.",
    features: [
      "Goal Prioritization",
      "Performance Benchmarking",
      "Cost Modelling",
      "Channel Investment Planning",
      "Budget Development"
    ],
    duration: "3-4 week project",
    price: "$3,000"
  },
  {
    title: "Build a Marketing Team",
    subtitle: "Form a high-performing marketing function that drives growth.",
    description: "Identify skill gaps, define the right roles and hiring criteria, and set your org up for marketing success.",
    features: [
      "Skill Gap Analysis",
      "Team Structure and Role Definition",
      "Hiring Criteria",
      "Interview Process",
      "Onboarding"
    ],
    duration: "Custom Timeline",
    price: "$4,500"
  },
  {
    title: "Analyze Marketing Performance",
    subtitle: "Evaluate the effectiveness of your marketing efforts and identify areas for improvement.",
    description: "Understand what's working and what isn't. Identify opportunities and actionable insights to enhance performance.",
    features: [
      "Content and Channel Performance",
      "Conversion Analysis and Opportunities",
      "Performance Benchmarking",
      "KPI Evaluation and Refinement",
      "Actionable Recommendations"
    ],
    duration: "3-4 week project",
    price: "$4,000"
  }
];