import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Home, Compass, Users, MessageCircle, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/find-teammates', icon: Users, label: 'Find Teammates' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass-dark z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Collabity
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
                      isActive
                        ? 'bg-purple-100 text-purple-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Profile */}
            <Link 
              to="/profile"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold hover:shadow-lg transition"
            >
              U
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-dark border-t border-white/20 z-50">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition ${
                  isActive ? 'text-purple-600' : 'text-gray-600'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label.split(' ')[0]}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
