# Collabity 🚀

**Where Student Builders Connect**

Collabity is a modern collaboration platform designed specifically for university students, alumni, and mentors. Find teammates for hackathons, build startups, join learning groups, and discover opportunities—all in one beautiful, trusted ecosystem.

## ✨ Features

- **Smart Teammate Matching** - Find collaborators based on skills, interests, and commitment level
- **Opportunities Feed** - Discover hackathons, projects, freelance gigs, and startup opportunities
- **Real-time Chat** - Collaborate with 1-1 and group messaging
- **Verified Profiles** - Build trust with reputation scores and badges
- **Project Showcase** - Display your work and build your portfolio
- **Mentor Access** - Connect with alumni and industry mentors (coming soon)

## 🎨 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first styling
- **shadcn/ui** - Premium UI components
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **React Query** - Server state management

### Backend
- **Firebase Authentication** - Secure user auth with email and Google
- **Firestore** - NoSQL cloud database
- **Firebase Storage** - File and image storage
- **Firebase Rules** - Security and access control

### Design
- Soft futuristic gradients
- Glassmorphism effects
- Clean, modern interface
- Mobile-responsive

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd collabity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Enable Storage
   - Copy your Firebase config

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
collabity/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   │   ├── Landing.tsx   # Landing page
│   │   ├── Auth.tsx      # Login/Signup
│   │   ├── Onboarding.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Explore.tsx   # Opportunities feed
│   │   ├── FindTeammates.tsx
│   │   ├── Chat.tsx
│   │   └── Profile.tsx
│   ├── lib/
│   │   ├── firebase.ts   # Firebase configuration
│   │   └── utils.ts      # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🔥 Firebase Setup

### Firestore Collections

```
users/
  - uid, name, email, skills[], interests[], bio, college, photo
  - availabilityStatus, reputationScore, projectsCount
  - createdAt

projects/
  - id, title, description, skillsNeeded[], tags[]
  - createdBy, members[], status
  - createdAt

opportunities/
  - id, type, title, description, skillsNeeded[]
  - postedBy, deadline, link, isRemote
  - createdAt

messages/
  - chatId, senderId, message, timestamp

chats/
  - id, participants[], lastMessage, isGroup
  - createdAt
```

### Security Rules

Set up Firestore security rules to protect user data. Example:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /opportunities/{opportunityId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.postedBy;
    }
  }
}
```

## 🎯 MVP Features (Phase 1)

- [x] Landing page with hero section
- [x] Authentication (Email & Google)
- [ ] User profile creation & editing
- [ ] Onboarding flow
- [ ] Skill-based teammate search
- [ ] Opportunities feed
- [ ] Post project/opportunity
- [ ] Real-time chat (1-1)
- [ ] Basic reputation system

## 🚧 Upcoming Features (Phase 2)

- [ ] AI teammate matching
- [ ] Group chat rooms
- [ ] Mentor marketplace
- [ ] Skill endorsements
- [ ] Gamified badges
- [ ] In-app task boards
- [ ] GitHub/Resume integration
- [ ] Voice rooms
- [ ] Mobile app

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`#667eea` → `#764ba2`)
- **Secondary**: Pink gradient (`#f093fb` → `#f5576c`)
- **Accent**: Cyan gradient (`#4facfe` → `#00f2fe`)

### Typography
- **Headings**: Bold, 2xl-7xl
- **Body**: Regular, text-base

### Components
- Rounded corners (rounded-xl, rounded-2xl, rounded-3xl)
- Glassmorphism effects
- Subtle shadows and borders
- Smooth hover transitions

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🌟 Acknowledgments

- Built with ❤️ for student builders
- Inspired by the need for better student collaboration tools
- Design inspiration: Notion, Figma, Discord

---

**Start building together with Collabity!** ✨

For questions or support, reach out to [your-email@example.com]
