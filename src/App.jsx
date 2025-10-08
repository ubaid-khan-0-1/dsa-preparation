import { useState, useEffect } from "react";
import "./App.css";

const roadmapData = [
  {
    title: "Core Data Structures & Algorithms",
    description: "Solve 5-7 questions/day (Easy 2, Medium 3, Hard 1)",
    tasks: [
      {
        name: "Arrays & Strings",
        links: [
          { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
          { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        ],
      },
      {
        name: "Linked List",
        links: [
          { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
          { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/" },
        ],
      },
      {
        name: "Stack & Queue",
        links: [
          { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
          { name: "Implement Queue Using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
        ],
      },
      {
        name: "Trees & Graphs",
        links: [
          { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/" },
        ],
      },
      {
        name: "Dynamic Programming",
        links: [
          { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/" },
        ],
      },
    ],
  },
  {
    title: "System Design",
    description: "1-2 designs/week + case studies",
    tasks: [
      { name: "URL Shortener" },
      { name: "Chat Application" },
      { name: "E-commerce Backend" },
      { name: "Design a Twitter Feed" },
      { name: "Resource", links: [{ name: "Grokking System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }] },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Daily 1-2 APIs implementation with testing",
    tasks: [
      { name: "Build REST API in Laravel" },
      { name: "JWT Authentication" },
      { name: "CRUD Operations & Database Optimization" },
      { name: "Unit & Integration Testing" },
    ],
  },
  {
    title: "Frontend & React.js",
    description: "1 small project/week + daily 1-2 hours practice",
    tasks: [
      { name: "Build Todo App" },
      { name: "Blog Frontend App" },
      { name: "E-commerce Product Page" },
      { name: "React Hooks, State, Context API" },
    ],
  },
  {
    title: "FAANG Interview Strategy",
    tasks: [
      { name: "Behavioral Questions: STAR Method" },
      {
        name: "Mock Interviews: Pramp & Interviewing.io", links: [
          { name: "Pramp", url: "https://www.pramp.com" },
          { name: "Interviewing.io", url: "https://interviewing.io" }
        ]
      },
      { name: "Resume Stories for Projects & Achievements" },
    ],
  },
  {
    title: "Daily Routine",
    tasks: [
      { name: "Morning (2-3 hrs): Solve 5-7 DS/Algo problems" },
      { name: "Afternoon (1-2 hrs): Backend / System Design / API building" },
      { name: "Evening (1-2 hrs): React.js / Frontend Projects" },
      { name: "Weekly: 1 Mock Interview & 1 System Design" },
      { name: "Monthly: Complete Mini Project + Portfolio Update" },
    ],
  },
];

function App() {
  const [checked, setChecked] = useState({});
  const [showContent, setShowContent] = useState(false);

  const toggleCheck = (section, task) => {
    const key = `${section}-${task}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Show content after car animation (12s)
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Background */}
      <div className="background-animation">
        <div className="fog"></div>
        <img
          src="/public/output-onlinegiftools.gif"
          alt="Lamborghini"
          className="lamborghini"
        />
      </div>

      <header className={`header-content ${showContent ? "visible" : ""}`}>
        <h1>FAANG Software Engineer 1 Roadmap (2026)</h1>
      </header>

      <div className={`container ${showContent ? "visible" : ""}`}>
        {roadmapData.map((section, sIdx) => (
          <div key={sIdx} className="section">
            <h2>{section.title}</h2>
            {section.description && <p>{section.description}</p>}
            <ul>
              {section.tasks.map((task, tIdx) => {
                const key = `${sIdx}-${tIdx}`;
                return (
                  <li
                    key={key}
                    className={`task-item ${checked[key] ? "checked" : ""}`}
                  >
                    <label>
                      <input
                        type="checkbox"
                        checked={checked[key] || false}
                        onChange={() => toggleCheck(sIdx, tIdx)}
                      />
                      {task.name}
                    </label>
                    {task.links && (
                      <ul className="sub-links">
                        {task.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <footer className={`footer-content ${showContent ? "visible" : ""}`}>
        Designed for Ubaid | FAANG Software Engineer 1 Preparation
      </footer>
    </div>
  );
}

export default App;
