# 💼 HireFlow — Recruitment Pipeline & Job Portal Platform

> A full-stack recruitment SaaS platform featuring role-based access control (RBAC), stateless JWT authentication, and an interactive candidate pipeline tracker.

[![Live Demo](https://img.shields.io/badge/Demo-Live_on_Vercel-22c55e.svg)](https://hireflow-alpha.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Amitrajput111%2Fjob__portal-blue.svg)](https://github.com/Amitrajput111/job_portal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Key Features
- **Dual-Portal Workflow:** Dedicated, permission-isolated dashboards for Recruiters and Job Applicants.
- **Stateless Authentication & Security:** Signed JWTs and bcrypt cryptographic password hashing.
- **Pipeline Progression:** Interactive multi-stage candidate tracking (Applied &rarr; Screening &rarr; Interview &rarr; Offer).
- **RESTful API Contracts:** 15+ verified endpoints with payload validation and error middleware.

---

## 🏗️ System Architecture

```
[ Frontend Client (React) ]
            │
      JWT Bearer Token
            ▼
[ Node.js / Express Gateway ]
   ├── RBAC Middleware (Recruiter vs Applicant Guard)
   ├── Job Posting & Application Handlers
   └── User Authentication Controller
            │
       Mongoose ODM
            ▼
[ MongoDB Database ]
```

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, State Management
- **Backend:** Node.js, Express.js, JWT, Bcrypt, Postman
- **Database:** MongoDB, Mongoose ODM
- **Deployment:** Vercel

---

## ⚡ Quick Start (Local Setup)

```bash
# 1. Clone repository
git clone https://github.com/Amitrajput111/job_portal.git
cd job_portal

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file and add:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=5000

# 4. Run application
npm run dev
```

---

## 👨‍💻 Author
**Amit Rajput**  
- Portfolio: [amit-portfolio-jet.vercel.app](https://amit-portfolio-jet.vercel.app/)
- LinkedIn: [linkedin.com/in/amitrajput111](https://linkedin.com/in/amitrajput111)
- GitHub: [github.com/Amitrajput111](https://github.com/Amitrajput111)
