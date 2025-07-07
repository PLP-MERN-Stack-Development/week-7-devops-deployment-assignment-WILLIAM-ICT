🐞 MERN Bug Tracker – Full Stack Application with CI/CD & Monitoring
📌 Project Overview
MERN Bug Tracker is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to report, update, and manage software bugs. The application emphasizes deployment-readiness, continuous integration, secure configuration, and real-time monitoring — aligning with modern DevOps practices.

This project was completed as part of a DevOps learning module focused on:

Preparing production-grade frontend and backend code

Deploying to cloud platforms (Render and Vercel)

Automating deployment using GitHub Actions

Monitoring application health and performance using tools like UptimeRobot and Sentry

🚀 Core Features
🐛 Bug Reporting – Users can report new issues using a simple form

📋 Bug List – View all submitted bugs with title, description, and status

🔄 Bug Status Update – Change bug state (open, in-progress, resolved)

🗑️ Bug Deletion – Remove resolved or outdated bugs

⚙️ CI/CD – Automatic testing and deployment using GitHub Actions

🧪 Unit & Integration Testing – Backend and frontend tests to ensure reliability

🔐 Secure Configuration – Environment variables and secure headers (Helmet)

📈 Monitoring – Uptime checks, performance tracking, error logging

| Layer      | Technology                           |
| ---------- | ------------------------------------ |
| Frontend   | React.js, CSS, React Testing Library |
| Backend    | Express.js, Node.js, MongoDB         |
| Database   | MongoDB Atlas (cloud-hosted)         |
| CI/CD      | GitHub Actions                       |
| Hosting    | Vercel (frontend), Render (backend)  |
| Monitoring | UptimeRobot, Sentry                  |
🎯 DevOps Highlights
✅ CI/CD Pipeline: Automatically runs tests and deploys on every GitHub push

✅ Environment Management: .env.production, .env.example, and secrets configured on Render/Vercel

✅ Health Checks: /health endpoint and monitoring via UptimeRobot

✅ Error Tracking: Sentry SDK configured for both frontend and backend

✅ HTTPS Enabled: Deployed via secure domains with SSL/TLS

🌍 Live Application Links
Frontend: https://mern-bug-tracker.vercel.app

Backend API: https://mern-bug-api.onrender.com/api

mern-bug-tracker/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── client/
│   ├── src/components/
│   ├── src/utils/api.js
│   └── .env.production
├── .github/workflows/deploy.yml
├── .env.example
└── README.md
