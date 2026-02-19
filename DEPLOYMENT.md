# HireFlow - Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

### Backend Preparation
- [x] Add `start` script to package.json
- [x] Create vercel.json configuration
- [x] Update CORS to handle production URLs
- [x] Export app for serverless deployment
- [x] Environment variables documented

### Frontend Preparation
- [x] Update API service to use environment variables
- [x] Create .env.example file
- [x] Vite build configuration ready
- [x] All routes working correctly

### Database
- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string ready

## 🚀 Step-by-Step Deployment

### Step 1: Deploy Backend to Vercel

1. **Install Vercel CLI** (if not installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Backend**
   ```bash
   cd backend
   vercel
   ```
   
   Follow prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **hireflow-backend**
   - Directory? **./backend** (or just press Enter)
   - Override settings? **N**

4. **Set Environment Variables**
   
   Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   
   Add these variables:
   ```
   MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/hireflow
   SECRET_KEY = your_jwt_secret_key_minimum_32_characters
   PORT = 8000
   FRONTEND_URL = https://your-frontend-url.vercel.app
   ```

5. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

6. **Copy Backend URL**
   - Example: `https://hireflow-backend.vercel.app`

### Step 2: Deploy Frontend to Vercel

1. **Create Frontend .env file**
   ```bash
   cd frontend
   ```
   
   Create `.env` file:
   ```env
   VITE_API_URL=https://hireflow-backend.vercel.app
   ```

2. **Deploy Frontend**
   ```bash
   vercel
   ```
   
   Follow prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **hireflow**
   - Directory? **./frontend** (or just press Enter)
   - Override settings? **N**

3. **Set Environment Variables**
   
   Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   
   Add:
   ```
   VITE_API_URL = https://hireflow-backend.vercel.app
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

5. **Copy Frontend URL**
   - Example: `https://hireflow.vercel.app`

### Step 3: Update Backend with Frontend URL

1. Go to Backend Project in Vercel Dashboard
2. Settings → Environment Variables
3. Update `FRONTEND_URL` with your actual frontend URL
4. Redeploy backend:
   ```bash
   cd backend
   vercel --prod
   ```

### Step 4: Connect GitHub for Auto-Deploy

1. **Go to Vercel Dashboard**
2. **Select Your Project**
3. **Settings → Git**
4. **Connect Git Repository**
   - Select GitHub
   - Authorize Vercel
   - Select repository: `Amitrajput111/job_portal`
5. **Configure**
   - Production Branch: `main` or `dev`
   - Root Directory: 
     - Backend: `backend`
     - Frontend: `frontend`
6. **Enable Auto-Deploy**
   - Every push to main/dev will trigger deployment

## 🔍 Verification Steps

### Test Backend
```bash
curl https://your-backend-url.vercel.app
```

Expected response:
```json
{
  "message": "HireFlow API is running",
  "status": "active",
  "version": "1.0.0"
}
```

### Test Frontend
1. Open `https://your-frontend-url.vercel.app`
2. Check:
   - [ ] Home page loads
   - [ ] Jobs page shows sample jobs
   - [ ] Login page accessible
   - [ ] Register page accessible
   - [ ] Contact page accessible
   - [ ] No console errors

### Test API Integration
1. Try to register a new user
2. Try to login
3. Browse jobs
4. View job details
5. Check if API calls work

## 🐛 Common Issues & Solutions

### Issue: CORS Error
**Solution:** 
- Ensure `FRONTEND_URL` is set correctly in backend
- Check CORS configuration in backend/index.js
- Redeploy backend after changes

### Issue: Environment Variables Not Working
**Solution:**
- Verify variables are set in Vercel Dashboard
- Redeploy after adding variables
- Check variable names match exactly

### Issue: MongoDB Connection Failed
**Solution:**
- Verify MongoDB Atlas IP whitelist (0.0.0.0/0)
- Check connection string format
- Ensure database user has correct permissions

### Issue: Build Failed
**Solution:**
- Check build logs in Vercel Dashboard
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

## 📊 Monitoring

### Vercel Dashboard
- View deployment logs
- Monitor function invocations
- Check error rates
- View analytics

### MongoDB Atlas
- Monitor database connections
- Check query performance
- View database size

## 🔄 Update Deployment

### Update Backend
```bash
cd backend
git add .
git commit -m "update: backend changes"
git push origin main
```
Auto-deploys via GitHub integration

### Update Frontend
```bash
cd frontend
git add .
git commit -m "update: frontend changes"
git push origin main
```
Auto-deploys via GitHub integration

## 📝 Environment Variables Reference

### Backend Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| MONGO_URI | MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/db |
| SECRET_KEY | JWT secret key | your_secret_key_min_32_chars |
| PORT | Server port | 8000 |
| FRONTEND_URL | Frontend URL for CORS | https://hireflow.vercel.app |

### Frontend Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | https://hireflow-backend.vercel.app |

## ✅ Final Checklist

- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Environment variables configured
- [ ] GitHub auto-deploy enabled
- [ ] MongoDB connection working
- [ ] CORS configured correctly
- [ ] All pages loading
- [ ] API calls working
- [ ] Authentication working
- [ ] No console errors
- [ ] README updated with live URLs
- [ ] Deployment documented

## 🎉 Success!

Your HireFlow application is now live and ready for:
- Portfolio showcase
- Internship submission
- LinkedIn profile
- Resume projects section

**Live URLs:**
- Frontend: `https://your-frontend.vercel.app`
- Backend: `https://your-backend.vercel.app`

---

**Deployed by:** Amit Singh Rajput  
**Date:** 2025
