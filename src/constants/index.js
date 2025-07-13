import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  openai,
  claude,
  Unknown,
  Sanghyun,
  cafora,
  MyBro,
  python,
  java,
  githubb,
  npm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Js",
    icon: web,
  },
  {
    title: "Tailwind Css",
    icon: mobile,
  },
  {
    title: "Typescript",
    icon: backend,
  },
  {
    title: "Figma",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githubb,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "AI Web Application Development",
    company_name: "DALL-E",
    icon: openai,
    iconBg: "#E6DEDD",
    date: "2023.03 - 2023.04",
    points: [
      "Utilized OpenAI's DALL·E model to generate images based on user text prompts, with a system to store prompts for future learning and improvement.",
      "Implemented functionality to display AI-generated images and save them as 1024×1024 JPEG files.",
      "Developed a community feature allowing users to browse images created from specific prompts and search through past generations.",
      "Enabled URL sharing so users could easily distribute results to others, enhancing the model's training data and improving image generation accuracy through broader usage.",
    ],
  },
  {
    title: "AI Web Application Development",
    company_name: "Anthropic",
    icon: claude,
    iconBg: "#E6DEDD",
    date: "2023.07 - 2023.08",
    points: [
      "Integrated Claude AI to process user text prompts and generate intelligent, context-aware responses, while storing those prompts for continued learning and refinement.",
      "Implemented features to display AI-generated text output and optionally save the results for review or further use.",
      "Built a community feature where users can explore responses to specific prompts and search through previously generated content.",
      "Added URL sharing functionality to allow users to easily share prompt results with others helping collect broader input, improve the model’s usefulness, and enhance response accuracy through expanded data exposure.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "혼자 뭘 만들고 있는지는 모르겠는데, 어느새 보면 이상한걸 항상 만들어온다. 실질적으로 도움이 될지는 모르겠지만 요즘은 그래도 퀄리티가 괜찮아진듯",
    name: "김학X 멘토님",
    designation: "익명",
    company: "IT 아카데미",
    image: Unknown,
  },
  {
    testimonial:
      "열심히 노력하는 모습이 보기 좋습니다 ㅎㅎ 비록 같은 회사에서 일해보진 않았지만 항상 열심히 하는모습 응원해요~",
    name: "김상현님",
    designation: "JavaScript Mastery",
    company: "수강생",
    image: Sanghyun,
  },
  {
    testimonial:
      "아주 푸딩같은 녀석, 물론 이유는 없다. 이유도 있어야해? 안좋은 일이 생기면 탄력있게 튕겨낸다 해야하나",
    name: "김우혁",
    designation: "형",
    company: "가족",
    image: MyBro,
  },
  {
    testimonial:
      "극소수한테만 공개해서 아직 네명이나 못 보여줬습니다.. 학교에서 자랑하고 반응 있으면 추가할 예정",
    name: "절대 왕따 아님",
    designation: "오해",
    company: "하지마요",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cafora",
    description: "RA",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: cafora,
    source_code_link: "https://github.com/pheavyraksonya/cafora-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
