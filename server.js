const express = require('express');
const app = express();
const port = 3000;


const projects = [
    { id: 1, name: "Portfolio", description: "A personal portfolio website to showcase my skills and projects." },
    { id: 2, name: "Testing API", description: "Checking the API working or not." },
    { id: 3, name: "MERN STACK", description: "45 Days Challenge given by Aldrin Sir." }
];

const workExperience = [
    { id: 1, company: "Uttaranchal University", role: "Student", duration: "Aug 2023 - Present" },
    { id: 2, company: "WebWorks", role: "Frontend Developer Intern", duration: "Aug 2024 - Dec 2025" }
];


// Get all projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Get a single project by ID
app.get('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: "Project not found" });
    }
});

// Get all work experience
app.get('/api/experience', (req, res) => {
    res.json(workExperience);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
