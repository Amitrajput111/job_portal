# JobPortal - MERN Stack Job Portal Application

A professional full-stack job portal application built with the MERN stack (MongoDB, Express, React, Node.js). Job seekers can browse and apply for jobs, while recruiters can post and manage job listings.

## ✨ Features

### For Job Seekers
- 🔐 User registration and authentication
- 🔍 Browse and search jobs
- 🎯 Filter jobs by type and work mode
- 📄 View detailed job descriptions
- ✅ One-click job application
- 👤 Profile management

### For Recruiters
- 🏢 Company registration
- 📝 Post job listings
- 📊 Manage job postings
- 👥 View applicants
- ✏️ Update application status

## 🛠️ Tech Stack

**Frontend:**
- React 19
- React Router DOM
- Axios
- Plain CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Amitrajput111/job_portal.git
cd job_portal
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
SECRET_KEY=your_jwt_secret_key_here
```

**Important:** Update `MONGO_URI` with your MongoDB connection string:
- Go to MongoDB Atlas → Network Access
- Add IP Address: `0.0.0.0/0` (Allow from anywhere)
- Or add your specific IP address

Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:8000`

### 3. Frontend Setup

Open new terminal:
```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
job-portal/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── middlewares/     # Auth middleware
│   ├── utils/           # Database connection
│   └── index.js         # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # React Context
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── App.jsx      # Main app component
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - Login user
- `GET /api/v1/user/logout` - Logout user
- `GET /api/v1/user/profile` - Get user profile
- `PUT /api/v1/user/profile/update` - Update profile

### Jobs
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `POST /api/v1/job/post` - Post new job (auth required)
- `GET /api/v1/job/getadminjobs` - Get recruiter's jobs (auth required)
- `DELETE /api/v1/job/delete/:id` - Delete job (auth required)

### Companies
- `POST /api/v1/company/register` - Register company (auth required)
- `GET /api/v1/company/get` - Get user's companies (auth required)
- `GET /api/v1/company/get/:id` - Get company by ID (auth required)
- `PUT /api/v1/company/update/:id` - Update company (auth required)

### Applications
- `POST /api/v1/application/apply/:id` - Apply for job (auth required)
- `GET /api/v1/application/get` - Get user's applications (auth required)
- `GET /api/v1/application/:id/applicants` - Get job applicants (auth required)
- `PUT /api/v1/application/status/:id/update` - Update status (auth required)

## 🎨 Features Implemented

✅ Clean, professional UI similar to Indeed/LinkedIn  
✅ Responsive design  
✅ JWT authentication with protected routes  
✅ Job search and filtering  
✅ Real-time job listings  
✅ User profile management  
✅ Application tracking  
✅ Error handling  
✅ Loading states  

## 🐛 Troubleshooting

### MongoDB Connection Issues
If you see "MongoDB connection error":
1. Check your `MONGO_URI` in `.env`
2. Verify MongoDB Atlas IP whitelist settings
3. Ensure database user credentials are correct

### Port Already in Use
If port 8000 or 5173 is busy:
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Change port in backend/.env
PORT=3000
```

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Amit Rajput
- GitHub: [@Amitrajput111](https://github.com/Amitrajput111)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
