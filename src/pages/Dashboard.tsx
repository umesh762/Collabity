import { Layout } from '@/components/Layout';
import { Sparkles, TrendingUp, Users, MessageCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Projects', value: '3', icon: Sparkles, color: 'from-purple-400 to-pink-400' },
    { label: 'Connections', value: '24', icon: Users, color: 'from-blue-400 to-cyan-400' },
    { label: 'Messages', value: '12', icon: MessageCircle, color: 'from-green-400 to-teal-400' },
    { label: 'Reputation', value: '85', icon: TrendingUp, color: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Builder! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your collaborations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass p-6 rounded-2xl border border-white/20 hover:shadow-xl transition">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="glass p-6 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-4 text-left rounded-xl border-2 border-purple-200 hover:bg-purple-50 transition">
                <p className="font-semibold text-purple-600">🚀 Post New Project</p>
                <p className="text-sm text-gray-600">Find teammates for your next big idea</p>
              </button>
              <button className="w-full p-4 text-left rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition">
                <p className="font-semibold text-blue-600">🔍 Find Teammates</p>
                <p className="text-sm text-gray-600">Search for skilled collaborators</p>
              </button>
              <button className="w-full p-4 text-left rounded-xl border-2 border-green-200 hover:bg-green-50 transition">
                <p className="font-semibold text-green-600">📚 Join Learning Group</p>
                <p className="text-sm text-gray-600">Connect with peers learning the same skills</p>
              </button>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Sarah joined your project "AI Study App"</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">New hackathon match found</p>
                  <p className="text-sm text-gray-600">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Received 5-star feedback from Alex</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="glass p-6 rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
          <p className="text-gray-600">Based on your skills and interests, we think you'll love these opportunities. Check the Explore page for more!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
