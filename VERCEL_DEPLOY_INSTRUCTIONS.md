# 🚀 Quick Vercel Deployment Instructions

## Prerequisites
- Vercel account (sign up at vercel.com)
- MongoDB Atlas account with database ready
- GitHub repository pushed

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Deploy Backend

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure project:
   - **Project Name:** `hireflow-backend`
   - **Framework Preset:** Other
   - **Root Directory:** `backend`
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
   - **Install Command:** `npm install`

4. Add Environment Variables:
   ```
   MONGO_URI = your_mongodb_connection_string
   SECRET_KEY = your_jwt_secret_key_32_chars_minimum
   PORT = 8000
   FRONTEND_URL = (leave empty for now, will update after frontend deploy)
   ```

5. Click **Deploy**
6. Copy the deployment URL (e.g., `https://hireflow-backend.vercel.app`)

### Deploy Frontend

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the same GitHub repository
3. Configure project:
   - **Project Name:** `hireflow`
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. Add Environment Variables:
   ```
   VITE_API_URL = https://hireflow-backend.vercel.app
   ```
   (Use your actual backend URL from step 1)

5. Click **Deploy**
6. Copy the deployment URL (e.g., `https://hireflow.vercel.app`)

### Update Backend with Frontend URL

1. Go to your backend project in Vercel
2. Settings → Environment Variables
3. Edit `FRONTEND_URL` and set it to your frontend URL
4. Go to Deployments tab
5. Click "..." on latest deployment → Redeploy

## Option 2: Deploy via Vercel CLI

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login
```bash
vercel login
```

### Deploy Backend
```bash
cd backend
vercel
# Follow prompts, then:
vercel --prod
```

### Deploy Frontend
```bash
cd frontend
vercel
# Follow prompts, then:
vercel --prod
```

## Enable Auto-Deploy from GitHub

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Git
4. Connect your GitHub repository
5. Set production branch to `dev` or `main`
6. Save

Now every push to your branch will auto-deploy!

## Verify Deployment

### Test Backend
Open: `https://your-backend-url.vercel.app`

Should see:
```json
{
  "message": "HireFlow API is running",
  "status": "active",
  "version": "1.0.0"
}
```

### Test Frontend
Open: `https://your-frontend-url.vercel.app`

Should see:
- Home page with hero section
- Navigation working
- Jobs page with sample jobs
- No console errors

## Update README with Live URLs

After successful deployment, update README.md:

```markdown
## 🌐 Live Demo

**Frontend:** https://your-frontend-url.vercel.app
**Backend API:** https://your-backend-url.vercel.app
```

Commit and push:
```bash
git add README.md
git commit -m "docs: add vercel deployment and live demo links 🚀"
git push origin dev
```

## Troubleshooting

### Backend not responding
- Check environment variables are set
- Verify MongoDB connection string
- Check Vercel function logs

### Frontend can't connect to backend
- Verify VITE_API_URL is correct
- Check CORS settings in backend
- Ensure FRONTEND_URL is set in backend

### Build fails
- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Test build locally first

## Need Help?

Check the detailed guide in `DEPLOYMENT.md`

---

**Ready to deploy? Let's go! 🚀**
