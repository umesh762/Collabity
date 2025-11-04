# 🔥 Firebase Setup Guide for Collabity

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: **"Collabity"** (or your preferred name)
4. Click **Continue**
5. (Optional) Disable Google Analytics or enable it
6. Click **Create project**
7. Wait for setup to complete, then click **Continue**

---

## Step 2: Enable Authentication

1. In the Firebase Console, click **Authentication** in the left sidebar
2. Click **Get started**
3. Go to the **Sign-in method** tab

### Enable Email/Password:
- Click **Email/Password**
- Toggle **Enable** to ON
- Click **Save**

### Enable Google Sign-In:
- Click **Google**
- Toggle **Enable** to ON
- Select a **Project support email** from the dropdown
- Click **Save**

---

## Step 3: Create Firestore Database

1. Click **Firestore Database** in the left sidebar
2. Click **Create database**
3. Select **Start in test mode** (we'll add security rules later)
4. Click **Next**
5. Choose a **Cloud Firestore location** (select closest to your users)
6. Click **Enable**
7. Wait for database to be created

---

## Step 4: Enable Storage

1. Click **Storage** in the left sidebar
2. Click **Get started**
3. Keep the default security rules (test mode)
4. Click **Next**
5. Select the same location as Firestore
6. Click **Done**

---

## Step 5: Get Your Firebase Configuration

1. Click the **⚙️ Settings gear icon** near "Project Overview"
2. Click **Project settings**
3. Scroll down to **"Your apps"** section
4. Click the **</>** (Web) icon to add a web app
5. Register app:
   - **App nickname**: "Collabity Web"
   - Check **"Also set up Firebase Hosting"** (optional)
   - Click **Register app**

6. **Copy the Firebase configuration** - it looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

---

## Step 6: Configure Your Local Project

### Create .env file:

In the `collabity` folder, create a file named `.env` (not .env.txt, just .env)

Copy this template and **replace with YOUR values**:

```env
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

**⚠️ IMPORTANT**: 
- No quotes needed around values
- No spaces before or after the `=` sign
- Use your actual Firebase values, not these examples!

---

## Step 7: Add Security Rules (Production Ready)

### Firestore Security Rules

Go to **Firestore Database** → **Rules** tab and paste this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if true;
      allow create: if isOwner(userId);
      allow update: if isOwner(userId);
      allow delete: if false;
    }
    
    // Projects collection
    match /projects/{projectId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update: if isAuthenticated() && 
        (request.auth.uid == resource.data.createdBy || 
         request.auth.uid in resource.data.members);
      allow delete: if isAuthenticated() && 
        request.auth.uid == resource.data.createdBy;
    }
    
    // Opportunities collection
    match /opportunities/{opportunityId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated() && 
        request.auth.uid == resource.data.postedBy;
    }
    
    // Chats collection
    match /chats/{chatId} {
      allow read: if isAuthenticated() && 
        request.auth.uid in resource.data.participants;
      allow create: if isAuthenticated();
      allow update: if isAuthenticated() && 
        request.auth.uid in resource.data.participants;
    }
    
    // Messages subcollection
    match /chats/{chatId}/messages/{messageId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated() && 
        request.auth.uid == resource.data.senderId;
    }
    
    // Feedback collection
    match /feedback/{feedbackId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated() && 
        request.auth.uid == resource.data.fromUserId;
    }
  }
}
```

Click **Publish**

### Storage Security Rules

Go to **Storage** → **Rules** tab and paste this:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // Profile photos
    match /profile-photos/{userId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.auth.uid == userId
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
    
    // Project files
    match /project-files/{projectId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null
        && request.resource.size < 10 * 1024 * 1024;
    }
    
    // Chat files
    match /chat-files/{chatId}/{fileName} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
        && request.resource.size < 10 * 1024 * 1024;
    }
  }
}
```

Click **Publish**

---

## Step 8: Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173

3. Click **"Get Started"** or **"Sign In"**

4. Try signing up with email and password

5. If successful, you'll see a new user in Firebase Console → Authentication

---

## ✅ Verification Checklist

- [ ] Firebase project created
- [ ] Authentication enabled (Email + Google)
- [ ] Firestore Database created
- [ ] Storage enabled
- [ ] Firebase config copied
- [ ] `.env` file created with correct values
- [ ] Security rules published
- [ ] App running locally
- [ ] Can sign up/sign in successfully

---

## 🐛 Troubleshooting

### "Firebase: Error (auth/...)"
- Check your `.env` file has the correct values
- Restart the dev server after creating `.env`
- Verify Authentication is enabled in Firebase Console

### "Missing or insufficient permissions"
- Publish the Firestore security rules
- Make sure you're signed in when testing

### ".env file not working"
- File must be named exactly `.env` (not `.env.txt`)
- Must be in the root `collabity` folder
- Restart dev server after creating/editing
- No quotes around values

### "Firebase app not initialized"
- Check all 6 environment variables are set
- Check for typos in variable names
- They must start with `VITE_`

---

## 🎉 You're Connected!

Once everything is set up, your app can:
- ✅ Sign up and sign in users
- ✅ Store user profiles in Firestore
- ✅ Upload profile photos to Storage
- ✅ Create opportunities and projects
- ✅ Send real-time messages
- ✅ Track user reputation

---

## Next Steps

Now that Firebase is connected, you can:

1. **Test Authentication**
   - Sign up with email
   - Sign in with Google
   - Check Firebase Console → Authentication to see users

2. **Add Sample Data**
   - Go to Firestore Database in Firebase Console
   - Manually add test data to see it in the app

3. **Start Building Features**
   - Implement profile creation
   - Build the opportunities feed
   - Add teammate search
   - Create chat functionality

---

Need help? Check the Firebase Console for detailed error messages!
