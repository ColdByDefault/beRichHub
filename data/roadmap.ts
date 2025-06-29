// SPDX-License-Identifier: LicenseRef-BRH-1.0
export const items = [
  [
    "Learn a beginner-friendly language (Python or JavaScript)",
    "Understand variables, data types, and operators",
    "Master control structures (if/else, loops)",
    "Learn functions and basic data structures",
    "Practice problem-solving with simple exercises",
  ],
  [
    "Learn HTML for structure",
    "Learn CSS for styling",
    "Understand responsive design principles",
    "Introduction to JavaScript for interactivity",
    "Build simple static websites",
  ],
  [
    "Learn Git basics (commit, push, pull)",
    "Create a GitHub account",
    "Understand branching and merging",
    "Collaborate on projects with others",
    "Create your first repository",
  ],
  [
    "Learn a frontend framework (React, Vue, or Angular)",
    "Understand component-based architecture",
    "Master state management",
    "Learn about API integration",
    "Build interactive web applications",
  ],
  [
    "Learn a backend language/framework (Node.js, Python/Django, etc.)",
    "Understand databases (SQL and NoSQL)",
    "Create RESTful APIs",
    "Implement authentication and authorization",
  ],
];

import { Globe, Smartphone, Server } from "lucide-react";
export const paths = [
  { id: "web", Icon: Globe },
  { id: "mobile", Icon: Smartphone },
  { id: "backend", Icon: Server },
];

// /data/resources.js
import {
  BookOpen,
  Youtube,
  BookMarked,
  Code2,
  Github,
  Database,
} from "lucide-react";
export const resources = [
  {
    id: "free-courses",
    title: "Free Courses",
    Icon: BookOpen,
    links: [
      { href: "https://www.freecodecamp.org/", label: "freeCodeCamp" },
      { href: "https://www.codecademy.com/", label: "Codecademy" },
      { href: "https://www.theodinproject.com/", label: "The Odin Project" },
      { href: "https://www.edx.org/", label: "edX" },
      { href: "https://www.coursera.org/", label: "Coursera" },
    ],
  },
  {
    id: "youtube-channels",
    title: "YouTube Channels",
    Icon: Youtube,
    links: [
      {
        href: "https://www.youtube.com/c/TraversyMedia",
        label: "Traversy Media",
      },
      { href: "https://www.youtube.com/c/TheNetNinja", label: "The Net Ninja" },
      { href: "https://www.youtube.com/c/Freecodecamp", label: "freeCodeCamp" },
      {
        href: "https://www.youtube.com/c/ProgrammingwithMosh",
        label: "Programming with Mosh",
      },
      { href: "https://www.youtube.com/c/Fireship", label: "Fireship" },
    ],
  },
  {
    id: "guides",
    title: "Documentation & Guides",
    Icon: BookMarked,
    links: [
      { href: "https://developer.mozilla.org/", label: "MDN Web Docs" },
      { href: "https://www.w3schools.com/", label: "W3Schools" },
      { href: "https://roadmap.sh/", label: "roadmap.sh" },
      { href: "https://www.geeksforgeeks.org/", label: "GeeksforGeeks" },
      { href: "https://www.tutorialspoint.com/", label: "TutorialsPoint" },
    ],
  },
  {
    id: "practice",
    title: "Coding Practice",
    Icon: Code2,
    links: [
      { href: "https://www.hackerrank.com/", label: "HackerRank" },
      { href: "https://leetcode.com/", label: "LeetCode" },
      { href: "https://www.codewars.com/", label: "Codewars" },
      { href: "https://exercism.io/", label: "Exercism" },
      { href: "https://www.codingame.com/", label: "CodinGame" },
    ],
  },
  {
    id: "open-source",
    title: "Open Source",
    Icon: Github,
    links: [
      {
        href: "https://github.com/firstcontributions/first-contributions",
        label: "First Contributions",
      },
      { href: "https://goodfirstissue.dev/", label: "Good First Issue" },
      { href: "https://up-for-grabs.net/", label: "Up For Grabs" },
      { href: "https://www.codetriage.com/", label: "CodeTriage" },
      {
        href: "https://hacktoberfest.digitalocean.com/",
        label: "Hacktoberfest",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Software",
    Icon: Database,
    links: [
      { href: "https://code.visualstudio.com/", label: "Visual Studio Code" },
      { href: "https://git-scm.com/", label: "Git" },
      { href: "https://github.com/", label: "GitHub" },
      { href: "https://www.figma.com/", label: "Figma" },
      { href: "https://www.postman.com/", label: "Postman" },
    ],
  },
];
