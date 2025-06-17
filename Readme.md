**Capstone Project Title**:

"Online Complaint Management System for  Hostel/College"

**Project Overview**:
This project aims to streamline the process of handling student facility complaints in a hostel or college environment through a web-based system. Students can submit issues like plumbing, cleaning, or electricity problems, and admin staff can view, manage, and resolve these complaints efficiently. The system ensures better communication, faster response times, and organized complaint handling.

**Project Features**:

 **Student Features**:
Submit complaints with room number, description, and category (e.g., Plumbing, Cleaning)


View submitted complaints and their current status


Delete/cancel a complaint (if it's still pending)


**Admin Fetures**:

View all complaints in a dashboard


Update complaint status (Pending → In Progress → Done)


Assign priority levels (Low, Medium, High)


Add comments or updates to complaints


Filter complaints by status or category


Here’s a **21-Day Capstone Development Plan with Brief Explanations** that you can directly include in your `README.md`. This version outlines **what was done each day and why**, matching your capstone requirements.

---

## 📅 21-Day Capstone Development Plan (with Explanations)

This capstone project — *"Online Complaint Management System for Hostel/College"* — was built using a structured 21-day development plan. Each day focused on specific technical and design milestones while tracking progress via GitHub Projects.

| Day        | Task & Explanation                                                                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Day 1**  | **Project Planning & Requirements Gathering**: Defined key user roles (Student, Admin), gathered functional requirements (submit, view, manage complaints), and created a feature list. |
| **Day 2**  | **Low-Fidelity Design**: Created simple wireframes (paper/Figma) to visualize key screens like login, dashboard, and complaint submission.                                              |
| **Day 3**  | **High-Fidelity Design**: Designed detailed UI mockups in Figma with colors, spacing, and component-level details based on the low-fid design.                                          |
| **Day 4**  | **GitHub Setup**: Created the GitHub repository, initialized README, set up branches (`main`, `dev`), and organized project files.                                                      |
| **Day 5**  | **Project Management Setup**: Set up GitHub Projects (Kanban board), added tasks like backend setup, database schema, API design, and tracked progress.                                 |
| **Day 6**  | **Database Schema Design**: Designed collections/tables for `Users` and `Complaints` with relationships using Mongoose (MongoDB).                                                       |
| **Day 7**  | **Backend Setup**: Initialized a Node.js + Express project, installed necessary packages, set up MongoDB connection, and `.env` configuration.                                          |
| **Day 8**  | **Model Creation**: Created Mongoose models for `User` and `Complaint` with fields like name, room number, description, category, status, and priority.                                 |
| **Day 9**  | **GET & POST APIs**: Implemented API routes to create complaints (POST) and fetch complaints by user or all complaints (GET).                                                           |
| **Day 10** | **PUT & DELETE APIs**: Added routes to update complaint status (PUT) and cancel/delete a complaint (DELETE), ensuring permissions were handled.                                         |
| **Day 11** | **Authentication with JWT**: Implemented secure login using JWT for both student and admin accounts, with protected routes.                                                             |
| **Day 12** | **API Testing & Documentation**: Used Bruno (or Postman) to test all endpoints and documented them. Updated API collection in the repo.                                                 |
| **Day 13** | **Frontend Initialization**: Bootstrapped the frontend using Vite + React, organized folder structure, and set up basic routing.                                                        |
| **Day 14** | **Backend Deployment**: Deployed the Express backend on Render (or Heroku), configured environment variables, and tested live APIs.                                                     |
| **Day 15** | **React Components**: Built key UI components including `LoginForm`, `ComplaintForm`, `ComplaintList`, and a dynamic dashboard.                                                         |
| **Day 16** | **API Integration (Frontend)**: Connected frontend to backend using Axios/Fetch to fetch, post, update, and delete complaint data.                                                      |
| **Day 17** | **Admin Features**: Built admin dashboard for filtering complaints by category/status and assigning priorities with UI-based PUT actions.                                               |
| **Day 18** | **File Upload Feature** (Optional): Added file input support in complaint form and stored uploads using multer (or cloud service).                                                      |
| **Day 19** | **Frontend Deployment**: Deployed the frontend to Netlify/Vercel and configured it to communicate with the deployed backend.                                                            |
| **Day 20** | **OAuth Integration** (Optional): Added Google Sign-In for improved authentication (optional but good for bonus points).                                                                |
| **Day 21** | **Final QA & Demo Recording**: Conducted bug fixing, UI polish, tested user flows end-to-end, and recorded a video explaining the project and demo.                                     |



