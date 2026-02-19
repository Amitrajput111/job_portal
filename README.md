# Job Portal Application

A full-stack MERN (MongoDB, Express, React, Node.js) job portal application where job seekers can browse and apply for jobs, and recruiters can post and manage job listings.

## Features

### For Job Seekers
- User registration and authentication
- Browse available jobs
- Search and filter jobs
- View detailed job descriptions
- Apply for jobs with one click
- Track application status
- Update profile and skills

### For Recruiters
- Company registration
- Post new job listings
- Manage job postings
- View applicants
- Update application status

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
```
MONGO_URI=your_mongodb_connection_string
PORT=8000
SECRET_KEY=your_jwt_secret_key
```

5. Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - Login user
- `GET /api/v1/user/logout` - Logout user
- `GET /api/v1/user/profile` - Get user profile
- `PUT /api/v1/user/profile/update` - Update profile

### Jobs
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `POST /api/v1/job/post` - Post new job (recruiter only)
- `GET /api/v1/job/getadminjobs` - Get recruiter's jobs
- `DELETE /api/v1/job/delete/:id` - Delete job

### Companies
- `POST /api/v1/company/register` - Register company
- `GET /api/v1/company/get` - Get user's companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `PUT /api/v1/company/update/:id` - Update company

### Applications
- `POST /api/v1/application/apply/:id` - Apply for job
- `GET /api/v1/application/get` - Get user's applications
- `GET /api/v1/application/:id/applicants` - Get job applicants
- `PUT /api/v1/application/status/:id/update` - Update application status

## Project Structure

```
job-portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For any queries or support, please open an issue in the repository.
