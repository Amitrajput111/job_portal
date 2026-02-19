# HireFlow - MERN Stack Job Portal Application

> A professional full-stack job portal application built with the MERN stack (MongoDB, Express, React, Node.js). Job seekers can browse and apply for jobs, while recruiters can post and manage job listings.

## 🌐 Live Demo

**Frontend:** [Coming Soon - Deploy to Vercel]  
**Backend API:** [Coming Soon - Deploy to Vercel]

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
- Vite
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

## 🚀 Local Development Setup

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
FRONTEND_URL=http://localhost:5173
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
```

Create `.env` file in frontend directory:
```env
VITE_API_URL=http://localhost:8000
```

Start frontend server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🌐 Deployment Guide

### Deploy Backend to Vercel

1. **Prepare Backend**
   - Ensure `vercel.json` exists in backend folder
   - Add `start` script in `package.json`

2. **Deploy via Vercel CLI**
   ```bash
   cd backend
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - `MONGO_URI` - Your MongoDB connection string
   - `SECRET_KEY` - Your JWT secret key
   - `FRONTEND_URL` - Your frontend Vercel URL

4. **Get Backend URL**
   - Copy the deployment URL (e.g., `https://your-backend.vercel.app`)

### Deploy Frontend to Vercel

1. **Update Frontend Environment**
   - Set `VITE_API_URL` to your backend Vercel URL

2. **Deploy via Vercel CLI**
   ```bash
   cd frontend
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - `VITE_API_URL` - Your backend Vercel URL

4. **Enable Auto-Deploy**
   - Connect GitHub repository in Vercel dashboard
   - Enable auto-deploy on push to main branch

### Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Backend:** Root directory = `backend`
   - **Frontend:** Root directory = `frontend`
4. Add environment variables
5. Deploy!

## 📁 Project Structure

```
hireflow/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── middlewares/     # Auth middleware
│   ├── utils/           # Database connection
│   ├── index.js         # Entry point
│   ├── vercel.json      # Vercel config
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # React Context
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── App.jsx      # Main app component
│   ├── index.html
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
✅ Sample jobs for demo  

## 🐛 Troubleshooting

### MongoDB Connection Issues
If you see "MongoDB connection error":
1. Check your `MONGO_URI` in `.env`
2. Verify MongoDB Atlas IP whitelist settings
3. Ensure database user credentials are correct

### CORS Issues in Production
- Ensure `FRONTEND_URL` is set correctly in backend environment variables
- Check that credentials are enabled in CORS configuration

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v14+)

## 📝 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=8000
SECRET_KEY=your_secret_key_minimum_32_characters
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.vercel.app
```

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

**Amit Singh Rajput**
- GitHub: [@Amitrajput111](https://github.com/Amitrajput111)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with MERN Stack
- Deployed on Vercel
- Database hosted on MongoDB Atlas

---

**Made with ❤️ by Amit Singh Rajput**
