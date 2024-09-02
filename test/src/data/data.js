export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const months = monthNames.map((name, i) => ({
  label: name,
  value: i + 1,
}));

export const dates = Array.from({ length: 31 }, (_, i) => ({
  label: String(i + 1),
  value: i + 1,
}));

const currentYear = new Date().getFullYear();
export const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => {
  const year = 1900 + i;
  return {
    label: String(year),
    value: year,
  };
});

export const skills = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "javascript" },
  { label: "React.js", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Sass", value: "sass" },
  { label: "Tailwind CSS", value: "tailwind" },
  { label: "Bootstrap", value: "bootstrap" },
  { label: "Webpack", value: "webpack" },
  { label: "Babel", value: "babel" },
  { label: "TypeScript", value: "typescript" },
  { label: "Redux", value: "redux" },
  { label: "Next.js", value: "nextjs" },
  { label: "Gatsby", value: "gatsby" },
  { label: "GraphQL", value: "graphql" },
  { label: "REST APIs", value: "rest_apis" },
  { label: "Git", value: "git" },
  { label: "Jest", value: "jest" },
  { label: "Testing Library", value: "testing_library" },
  { label: "Figma", value: "figma" },
  { label: "Adobe XD", value: "adobe_xd" },
  { label: "Responsive Design", value: "responsive_design" },
  { label: "Cross-Browser Compatibility", value: "cross_browser" },
  { label: "Performance Optimization", value: "performance_optimization" },
];

export const options = ["Edit", "Delete", "Duplicate", "Move to"];
