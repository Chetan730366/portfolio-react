import React from 'react'
import "./Skill.css"
import claudeIcon from "../../assets/claude.gif";





const data = [
    {
        skillicon: "⚛️",
        title: "React.js",
        skilldesc: "Functional components, Hooks (useState, useEffect, useRef, useContext), JSX, modular architecture",
    },
    {
        skillicon: "🎨",
        title: "Styling",
        skilldesc: "Tailwind CSS, Bootstrap 5, CSS Modules, Flexbox, Grid — mobile-first responsive design"
    },
    {
        skillicon: "✨",
        title: "GSAP Animations",
        skilldesc: "ScrollTrigger, Timelines, staggered reveals, scroll-driven motion design and SVG animations"
    },
    {
        skillicon: "🔌",
        title: "API Integration",
        skilldesc: "REST APIs, Fetch API, Axios, Google Sheets as live data backend, JSON handling"
    },
    {
        skillicon: "⚡",
        title: "JavaScript ES6+",
        skilldesc: "Arrow functions, destructuring, spread/rest, Promises, async/await, modules."
    },
    {
        skillicon: "🛠️",
        title: "Dev Tools",
        skilldesc: "Git, GitHub, VS Code, Chrome DevTools, Lighthouse audits, Figma basics, NPM."
    },
    {
        skillicon: "🗄️",
        title: "Database & SQL",
        skilldesc: "MySQL, PostgreSQL, SQLite — queries, joins, indexing, CRUD operations and schema design."
    },
    {
        skillicon: (
            <img
                src={claudeIcon}
                alt="Claude AI"
                className="skill-icon-img"
            />
        ),
        title: "AI Integration",
        skilldesc: "Gemini (Images) | ChatGPT (Content) | Claude (PDF/Code) | OpenAI & Claude API integration."
    }

]


const Skill = () => {
    return (
        <div className='skills-container'>
            {data.map((item) => (
                <div className="card" key={item.title} >
                    <h2>{item.skillicon}</h2>
                    <h3>{item.title}</h3>
                    <p>{item.skilldesc}</p>
                </div >
            ))}
        </div>
    )
}

export default Skill;