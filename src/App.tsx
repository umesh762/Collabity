import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import FindTeammates from './pages/FindTeammates';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/find-teammates" element={<FindTeammates />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
