# Collabity - Development Guide

## 🎯 Project Overview

Collabity is a student collaboration platform that brings together university students, alumni, and mentors for hackathons, projects, freelance gigs, learning groups, and startup building.

**The Problem**: Students currently juggle multiple platforms:
- LinkedIn for networking
- Internshala for internships  
- Fiverr for gigs
- Discord for groups
- WhatsApp for teams

**The Solution**: One unified, trusted ecosystem for student builders.

---

## 🏗️ Architecture

### Frontend Architecture
```
React + TypeScript
├── Vite (Build Tool)
├── React Router (Routing)
├── React Query (Server State)
├── Zustand (Client State - optional)
└── TailwindCSS + shadcn/ui (Styling)
```

### Backend Architecture
```
Firebase Services
├── Authentication (Email, Google)
├── Firestore (NoSQL Database)
├── Storage (Files, Images)
└── Security Rules
```

### Future Backend (Phase 2)
- Node.js + Express API
- Advanced matching algorithms
- Scheduled jobs
- Email notifications
- Analytics

---

## 📊 Data Models

### User Document (`users/{uid}`)
```typescript
{
  uid: string
  name: string
  email: string
  college?: string
  photo?: string
  skills: string[]
  interests: string[]
  bio?: string
  availabilityStatus: 'available' | 'busy' | 'offline'
  projectsCount: number
  hackathonsCount: number
  reputationScore: number
  createdAt: Date
  experience?: string[]
  timezone?: string
  githubUrl?: string
  linkedinUrl?: string
  portfolioUrl?: string
}
```

### Project Document (`projects/{id}`)
```typescript
{
  id: string
  title: string
  description: string
  skillsNeeded: string[]
  tags: string[]
  createdBy: string
  members: string[]
  status: 'open' | 'in-progress' | 'completed'
  createdAt: Date
  deadline?: Date
  maxMembers?: number
}
```

### Opportunity Document (`opportunities/{id}`)
```typescript
{
  id: string
  type: 'hackathon' | 'gig' | 'learning-group' | 'startup' | 'project'
  title: string
  description: string
  postedBy: string
  postedByName: string
  postedByPhoto?: string
  skillsNeeded: string[]
  tags: string[]
  deadline?: Date
  link?: string
  location?: string
  isRemote?: boolean
  compensation?: string
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced'
  createdAt: Date
  applicants?: string[]
  maxApplicants?: number
}
```

### Chat Document (`chats/{id}`)
```typescript
{
  id: string
  participants: string[]
  participantDetails: { uid: string; name: string; photo?: string }[]
  lastMessage?: string
  lastMessageTimestamp?: Date
  isGroup: boolean
  groupName?: string
  groupPhoto?: string
  createdAt: Date
}
```

### Message Document (`messages/{chatId}/messages/{id}`)
```typescript
{
  id: string
  chatId: string
  senderId: string
  senderName: string
  senderPhoto?: string
  message: string
  timestamp: Date
  type: 'text' | 'file' | 'link'
  fileUrl?: string
  fileName?: string
}
```

### Feedback Document (`feedback/{id}`)
```typescript
{
  id: string
  fromUserId: string
  toUserId: string
  projectId?: string
  rating: number (1-5)
  comment?: string
  skills?: string[]
  createdAt: Date
}
```

---

## 🔒 Firebase Security Rules

### Firestore Rules
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

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /profile-photos/{userId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
    
    match /project-files/{projectId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null
        && request.resource.size < 10 * 1024 * 1024;
    }
  }
}
```

---

## 🎨 Design System

### Color Palette
```css
Primary Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Secondary Gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
Accent Gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
Soft Gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)
Neon Gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%)
```

### Typography
- **Font Family**: System fonts (Inter, SF Pro, Segoe UI)
- **Headings**: 2xl to 7xl, bold weight
- **Body**: base size, regular weight
- **Small**: sm to xs sizes

### Spacing
- Base: 4px (0.25rem)
- Consistent: 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- Small: 8px (rounded-lg)
- Medium: 12px (rounded-xl)
- Large: 16px (rounded-2xl)
- Extra Large: 24px (rounded-3xl)
- Full: 9999px (rounded-full)

### Shadows
```css
Small: 0 1px 3px rgba(0,0,0,0.12)
Medium: 0 4px 6px rgba(0,0,0,0.1)
Large: 0 10px 25px rgba(0,0,0,0.15)
```

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.2)
```

---

## 🧩 Component Library

### Base Components
- `Button` - Multiple variants (primary, secondary, outline, ghost)
- `Input` - Text, email, password inputs
- `Select` - Dropdown selection
- `Modal` - Overlay dialog
- `Card` - Content container
- `Badge` - Status indicators
- `Avatar` - User profile images

### Custom Components
- `SkillTag` - Skill badges with colors
- `ProfileCard` - User profile preview
- `OpportunityCard` - Opportunity listings
- `ChatBubble` - Message display
- `Layout` - Page wrapper with navigation
- `SearchBar` - Filter and search

---

## 🚀 Features Roadmap

### Phase 1 - MVP (Current)
- [x] Landing page
- [x] Authentication (Email, Google)
- [x] Basic routing
- [ ] User profile CRUD
- [ ] Onboarding flow
- [ ] Skill-based search
- [ ] Opportunities feed
- [ ] Post opportunity
- [ ] 1-1 chat
- [ ] Basic reputation

### Phase 2 - Enhanced
- [ ] AI teammate matching
- [ ] Group chat rooms
- [ ] Advanced filters
- [ ] Notifications system
- [ ] Email digests
- [ ] Mobile responsive optimization

### Phase 3 - Advanced
- [ ] Mentor marketplace
- [ ] Skill endorsements
- [ ] Gamified badges
- [ ] In-app task boards
- [ ] GitHub integration
- [ ] Resume builder
- [ ] Analytics dashboard

### Phase 4 - Scale
- [ ] Voice chat rooms
- [ ] Video calls
- [ ] Mobile apps (React Native)
- [ ] API for third-party integrations
- [ ] Payment system for gigs
- [ ] Advanced moderation tools

---

## 🧪 Testing Strategy

### Unit Tests
- Utils functions
- Custom hooks
- Component logic

### Integration Tests
- Firebase operations
- Authentication flows
- Data mutations

### E2E Tests
- User registration
- Project creation
- Chat functionality
- Search and filters

---

## 🔧 Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and test locally**
   ```bash
   npm run dev
   ```

3. **Run linter**
   ```bash
   npm run lint
   ```

4. **Build production**
   ```bash
   npm run build
   ```

5. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   git push origin feature/your-feature-name
   ```

6. **Create pull request**

---

## 📦 Deployment

### Frontend (Vercel/Firebase Hosting)
```bash
# Firebase
npm run build
firebase deploy --only hosting

# Vercel
vercel --prod
```

### Environment Variables
Add these to your deployment platform:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

---

## 🐛 Common Issues & Solutions

### Issue: Firebase errors on build
**Solution**: Ensure all environment variables are set correctly

### Issue: Tailwind classes not applying
**Solution**: Check `tailwind.config.js` content paths

### Issue: Type errors in TypeScript
**Solution**: Run `npm install` to ensure all @types packages are installed

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)

---

## 👥 Contributing

We welcome contributions! Please see our contributing guidelines and code of conduct.

---

**Built with ❤️ by the Collabity Team**
