// User Types
export interface User {
  uid: string;
  name: string;
  email: string;
  college?: string;
  photo?: string;
  skills: string[];
  interests: string[];
  bio?: string;
  availabilityStatus: 'available' | 'busy' | 'offline';
  projectsCount: number;
  hackathonsCount: number;
  reputationScore: number;
  createdAt: Date;
  experience?: string[];
  timezone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  skillsNeeded: string[];
  tags: string[];
  createdBy: string;
  members: string[];
  status: 'open' | 'in-progress' | 'completed';
  createdAt: Date;
  deadline?: Date;
  maxMembers?: number;
}

// Message Types
export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  senderName: string;
  senderPhoto?: string;
  message: string;
  timestamp: Date;
  type: 'text' | 'file' | 'link';
  fileUrl?: string;
  fileName?: string;
}

export interface Chat {
  id: string;
  participants: string[];
  participantDetails: { uid: string; name: string; photo?: string }[];
  lastMessage?: string;
  lastMessageTimestamp?: Date;
  isGroup: boolean;
  groupName?: string;
  groupPhoto?: string;
  createdAt: Date;
}

// Opportunity Types
export type OpportunityType = 'hackathon' | 'gig' | 'learning-group' | 'startup' | 'project';

export interface Opportunity {
  id: string;
  type: OpportunityType;
  title: string;
  description: string;
  postedBy: string;
  postedByName: string;
  postedByPhoto?: string;
  skillsNeeded: string[];
  tags: string[];
  deadline?: Date;
  link?: string;
  location?: string;
  isRemote?: boolean;
  compensation?: string;
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
  applicants?: string[];
  maxApplicants?: number;
}

// Feedback & Reputation Types
export interface Feedback {
  id: string;
  fromUserId: string;
  toUserId: string;
  projectId?: string;
  rating: number;
  comment?: string;
  skills?: string[];
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'hackathon' | 'open-source' | 'ml' | 'web' | 'mobile' | 'special';
  earnedAt: Date;
}

// Filter Types
export interface TeammateFilters {
  skills?: string[];
  college?: string;
  interests?: string[];
  availabilityStatus?: string;
  experienceLevel?: string;
}

export interface OpportunityFilters {
  type?: OpportunityType[];
  skills?: string[];
  isRemote?: boolean;
  experienceLevel?: string;
}

// Auth Context Type
export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}
