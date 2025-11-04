import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Users, 
  Rocket, 
  MessageCircle, 
  Award, 
  Search,
  ArrowRight,
  Code,
  Lightbulb,
  Target
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-dark z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Collabity
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth" className="text-gray-700 hover:text-purple-600 transition">
                Sign In
              </Link>
              <Link 
                to="/auth" 
                className="px-6 py-2 gradient-primary text-white rounded-full hover:shadow-lg transition transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 glass rounded-full border border-purple-200">
                <span className="text-purple-600 font-semibold">✨ Where Student Builders Connect</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Collaboration Team
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              One platform for hackathons, projects, startups, and learning. 
              Connect with skilled teammates, mentors, and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/auth"
                className="group px-8 py-4 gradient-primary text-white rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center gap-2"
              >
                Start Building Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <button className="px-8 py-4 glass border border-purple-200 rounded-full text-lg font-semibold hover:shadow-lg transition">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Find Teammates', desc: 'Match with students by skills, interests, and goals', gradient: 'from-purple-400 to-pink-400' },
              { icon: Rocket, title: 'Join Projects', desc: 'Discover hackathons, startups, and learning groups', gradient: 'from-blue-400 to-cyan-400' },
              { icon: Award, title: 'Build Reputation', desc: 'Earn badges and showcase your collaboration skills', gradient: 'from-pink-400 to-red-400' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border border-white/20 hover:shadow-2xl transition"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">Stop juggling multiple platforms. Build together in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: 'Smart Matching', desc: 'AI-powered teammate recommendations based on skills and goals' },
              { icon: MessageCircle, title: 'Real-time Chat', desc: 'Collaborate with 1-1 and group messaging' },
              { icon: Code, title: 'Project Showcase', desc: 'Build your portfolio and share your work' },
              { icon: Lightbulb, title: 'Opportunities Feed', desc: 'Discover hackathons, gigs, and learning groups' },
              { icon: Target, title: 'Skill Filters', desc: 'Find exactly the skills you need for your project' },
              { icon: Award, title: 'Verified Profiles', desc: 'Trust layer with reputation scores and badges' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition"
              >
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-12 rounded-3xl text-center border border-purple-300/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of student builders creating amazing things together.
            </p>
            <Link 
              to="/auth"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
            >
              Create Your Profile
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <span className="text-xl font-bold">Collabity</span>
              </div>
              <p className="text-gray-600">Where student builders connect and create together.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Features</a></li>
                <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">About</a></li>
                <li><a href="#" className="hover:text-purple-600">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-600">LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-600">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2025 Collabity. Built with ✨ for student builders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
