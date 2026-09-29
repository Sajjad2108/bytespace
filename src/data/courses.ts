export type Course = {
  title: string;
  image: string;
  rating: number;
  author: string;
  level: string;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  learners: number;
};

const defaults = {
  rating: 4.5,
  author: "purepearl studio",
  level: "Beginner",
  price: 25,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  learners: 26,
};

export const courses: Course[] = [
  { ...defaults, title: "Learn Figma from Basic", image: "/images/courses/figma.jpg" },
  { ...defaults, title: "Build Digital Asset", image: "/images/courses/digital-asset.jpg" },
  { ...defaults, title: "the Power of Big Data", image: "/images/courses/big-data.jpg" },
  {
    ...defaults,
    title: "Balancing Productivity and Wellbeing",
    image: "/images/courses/productivity.jpg",
  },
  { ...defaults, title: "Mastering Money Management", image: "/images/courses/money.jpg" },
  { ...defaults, title: "From Idea to Startup Success", image: "/images/courses/startup.jpg" },
];

/** Topic chips, grouped into the three rows shown on desktop. */
export const topics = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const categories = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "development" },
  { label: "IT & Software", icon: "it" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
] as const;

export type CategoryIcon = (typeof categories)[number]["icon"];
