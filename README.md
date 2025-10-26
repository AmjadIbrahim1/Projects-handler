# Project Manager App

A simple and efficient project management tool built with **React**.  
The app allows users to create, view, edit, and delete projects while managing details such as project title, description, and due date. It includes form validation and a clean UI layout to enhance user experience.

---

## 🚀 Features

- Create new projects with detailed input fields
- Edit existing project information
- Delete projects with a single click
- Real-time input validation (title, description, and date format `DD-MM-YYYY`)
- Prevents adding past or invalid dates
- Fully responsive and clean UI
- Uses React state and props for structured data management

---

## 📂 Project Structure

src/
│
├── components/
│   ├── 
│   │   ├── Input.jsx
│   │   └── Invalid.jsx
│   │
│   ├── 
│   │   ├── ProjectSidebar.jsx
│   │   └── NoProject.jsx
│   │
│   ├── 
│   │   ├── NewProject.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── ProjectItem.jsx (اختياري لاحقاً في حالة عرض مشروع)
│
├── validation/
│   └── Date.js
│
├── assets/
│   └── (images / icons / logos … if needed)
│
├── App.jsx
├── main.jsx
└── index.css


---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| React | UI Development |
| JavaScript (ES6+) | Logic and State Management |
| Tailwind CSS | Styling and Layout |
| Vite / Create React App | Project setup (depending on your environment) |

---

## ✅ Validation Rules

| Field | Rule |
|------|------|
| Title | Minimum 5 characters |
| Description | Minimum 10 characters |
| Due Date | Must follow `DD-MM-YYYY` format and must be a **future date** |
| Missing Fields | Not allowed |

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/project-manager-app.git

# Navigate into directory
cd project-manager-app

# Install dependencies
npm install

# Start development server
npm run dev


Author : Amjad Ibrahim
