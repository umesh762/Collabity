# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18 or higher
- npm or yarn
- A Firebase account

## Setup in 5 Minutes

### 1. Install Dependencies
```bash
cd collabity
npm install
```

### 2. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Name it "Collabity" (or your choice)
4. Follow the setup wizard

### 3. Enable Firebase Services

**Authentication**
1. Go to Authentication > Sign-in method
2. Enable "Email/Password"
3. Enable "Google"

**Firestore Database**
1. Go to Firestore Database
2. Click "Create Database"
3. Choose "Start in test mode" (we'll add security rules later)
4. Select a location

**Storage**
1. Go to Storage
2. Click "Get Started"
3. Start in test mode

### 4. Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click web icon (</>)
4. Register app as "Collabity Web"
5. Copy the config object

### 5. Configure Environment
```bash
# Create .env file
cp .env.example .env

# Edit .env and paste your Firebase config values
```

Your `.env` should look like:
```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 6. Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser!

## 🎉 You're Ready!

The app should now be running. You can:
- ✅ View the landing page
- ✅ Sign up / Sign in
- ✅ Navigate between pages
- ✅ See the dashboard

## Next Steps

### Add Sample Data (Optional)
You can manually add some test users and opportunities in Firestore to see the UI with data.

### Deploy Firebase Security Rules
Once you're ready to deploy, update your Firestore rules. See `DEVELOPMENT.md` for the security rules.

### Customize
- Update branding in `Landing.tsx`
- Modify color schemes in `tailwind.config.js`
- Add your own features!

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Firebase errors?**
- Double-check your `.env` file
- Make sure you enabled Authentication and Firestore
- Verify the config values are correct

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

## Support

Need help? Check out:
- `README.md` - Full documentation
- `DEVELOPMENT.md` - Detailed development guide
- [Firebase Docs](https://firebase.google.com/docs)
- [Vite Docs](https://vitejs.dev)

Happy building! 🚀
