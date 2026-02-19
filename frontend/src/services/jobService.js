import api from './api';

// Sample jobs for demo purposes
const sampleJobs = [
  {
    _id: "1",
    title: "Senior Frontend Developer",
    description: "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building responsive web applications using React and modern JavaScript frameworks.",
    requirements: ["React.js", "JavaScript/TypeScript", "HTML/CSS", "REST APIs", "Git"],
    salary: 1200000,
    location: "Bangalore, Karnataka",
    jobType: "Full-time",
    experienceLevel: 3,
    position: 2,
    company: { name: "Tech Solutions Pvt Ltd" }
  },
  {
    _id: "2",
    title: "Backend Developer - Node.js",
    description: "Join our backend team to build scalable APIs and microservices. Work with cutting-edge technologies and contribute to our growing platform.",
    requirements: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Docker"],
    salary: 1500000,
    location: "Pune, Maharashtra",
    jobType: "Full-time",
    experienceLevel: 2,
    position: 3,
    company: { name: "Digital Innovations" }
  },
  {
    _id: "3",
    title: "Full Stack Developer",
    description: "Looking for a versatile Full Stack Developer who can work on both frontend and backend. Great opportunity to work on exciting projects.",
    requirements: ["React", "Node.js", "MongoDB", "JavaScript", "AWS"],
    salary: 1800000,
    location: "Hyderabad, Telangana",
    jobType: "Full-time",
    experienceLevel: 4,
    position: 1,
    company: { name: "Cloud Systems Inc" }
  },
  {
    _id: "4",
    title: "Software Development Intern",
    description: "Exciting internship opportunity for students to learn and grow. Work on real projects with experienced mentors.",
    requirements: ["JavaScript", "React basics", "Problem solving", "Communication"],
    salary: 300000,
    location: "Remote",
    jobType: "Internship",
    experienceLevel: 0,
    position: 5,
    company: { name: "StartupHub" }
  },
  {
    _id: "5",
    title: "DevOps Engineer",
    description: "Manage our cloud infrastructure and CI/CD pipelines. Help us scale our applications efficiently.",
    requirements: ["AWS/Azure", "Docker", "Kubernetes", "Jenkins", "Linux"],
    salary: 1600000,
    location: "Mumbai, Maharashtra",
    jobType: "Full-time",
    experienceLevel: 3,
    position: 2,
    company: { name: "Enterprise Tech" }
  },
  {
    _id: "6",
    title: "UI/UX Designer",
    description: "Create beautiful and intuitive user interfaces. Work closely with developers to bring designs to life.",
    requirements: ["Figma", "Adobe XD", "User Research", "Prototyping", "HTML/CSS"],
    salary: 900000,
    location: "Delhi, NCR",
    jobType: "Full-time",
    experienceLevel: 2,
    position: 1,
    company: { name: "Design Studio" }
  },
  {
    _id: "7",
    title: "Data Analyst",
    description: "Analyze data to provide insights and drive business decisions. Work with large datasets and visualization tools.",
    requirements: ["SQL", "Python", "Excel", "Power BI", "Statistics"],
    salary: 800000,
    location: "Bangalore, Karnataka",
    jobType: "Full-time",
    experienceLevel: 1,
    position: 2,
    company: { name: "Data Corp" }
  },
  {
    _id: "8",
    title: "Mobile App Developer - React Native",
    description: "Build cross-platform mobile applications for iOS and Android. Join our mobile team.",
    requirements: ["React Native", "JavaScript", "Mobile UI", "REST APIs", "Git"],
    salary: 1100000,
    location: "Chennai, Tamil Nadu",
    jobType: "Full-time",
    experienceLevel: 2,
    position: 2,
    company: { name: "Mobile Solutions" }
  },
  {
    _id: "9",
    title: "QA Engineer",
    description: "Ensure quality of our products through manual and automated testing. Write test cases and find bugs.",
    requirements: ["Manual Testing", "Selenium", "API Testing", "Test Cases", "Bug Tracking"],
    salary: 700000,
    location: "Noida, Uttar Pradesh",
    jobType: "Full-time",
    experienceLevel: 1,
    position: 3,
    company: { name: "Quality Systems" }
  },
  {
    _id: "10",
    title: "Python Developer",
    description: "Work on backend services and data processing pipelines using Python. Great learning opportunity.",
    requirements: ["Python", "Django/Flask", "PostgreSQL", "REST APIs", "Git"],
    salary: 1000000,
    location: "Pune, Maharashtra",
    jobType: "Full-time",
    experienceLevel: 2,
    position: 2,
    company: { name: "Python Tech" }
  },
  {
    _id: "11",
    title: "Product Manager",
    description: "Lead product development from conception to launch. Work with cross-functional teams.",
    requirements: ["Product Strategy", "Agile", "User Stories", "Analytics", "Communication"],
    salary: 2000000,
    location: "Bangalore, Karnataka",
    jobType: "Full-time",
    experienceLevel: 5,
    position: 1,
    company: { name: "Product Innovations" }
  },
  {
    _id: "12",
    title: "Machine Learning Engineer",
    description: "Build and deploy ML models. Work on cutting-edge AI projects.",
    requirements: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Data Science"],
    salary: 2200000,
    location: "Hyderabad, Telangana",
    jobType: "Full-time",
    experienceLevel: 3,
    position: 2,
    company: { name: "AI Labs" }
  }
];

export const getJobs = async (keyword = '') => {
  try {
    const response = await api.get(`/job/get?keyword=${keyword}`);
    const apiJobs = response.data.data || [];
    
    // If API returns jobs, use them; otherwise use sample jobs
    if (apiJobs.length > 0) {
      return apiJobs;
    }
    
    // Return sample jobs filtered by keyword if provided
    if (keyword) {
      return sampleJobs.filter(job => 
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase()) ||
        job.location.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    
    return sampleJobs;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    // Return sample jobs on error
    return sampleJobs;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await api.get(`/job/get/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching job:', error);
    // Return sample job if API fails
    return sampleJobs.find(job => job._id === id) || null;
  }
};

export const applyForJob = async (jobId) => {
  try {
    const response = await api.post(`/application/apply/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error;
  }
};

