import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  discord,
  facebook,
  instagram,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Home",
    url: "#hero",
  },
  {
    id: "2",
    title: "Features",
    url: "#features",
  },
  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI generator, personalized recommendations",
    price: "0",
    features: [
      "An AI Generator that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app features ",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI Generator, priority support, analytics dashboard",
    price: "29.99",
    features: [
      "An advanced AI Generator that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Tuning",
    description: "Contact us to get AI source, so you can tune it to your needs",
    price: null,
    features: [
      "AI source for tuning. You will be able to modify our AI",
      "Recommendations from us based on your preferences",
      "Add featues by yourself",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users ask basic language prompts without having to know deep about cars.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Choosing the Engine",
    text: "Our AI model will help you pick the right engine for your car for the best performance.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    light: true,
  },
  {
    id: "2",
    title: "Personalized Colors",
    text: "Select the perfect color for your car. Consider trends, resale value, and how different colors affect maintenance.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "Sleek Exterior Customization",
    text: "Transform your vehicle's look with innovative body kits that enhance aerodynamics and style.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    light: true,
  },
  {
    id: "4",
    title: "Adaptive Interior Design",
    text: "Tell us about you interior preferences. AI will help you choose the best",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
  },
  {
    id: "5",
    title: "Personalized Driving Experience",
    text: "The AI learns your preferences over time, adjusting climate, seat position, and entertainment options for a tailored driving experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
