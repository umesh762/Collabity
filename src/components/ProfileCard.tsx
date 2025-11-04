import { User } from '@/types';
import { getInitials } from '@/lib/utils';
import { MapPin, Star } from 'lucide-react';
import { SkillTag } from './SkillTag';

interface ProfileCardProps {
  user: User;
  onConnect?: () => void;
}

export const ProfileCard = ({ user, onConnect }: ProfileCardProps) => {
  return (
    <div className="glass p-6 rounded-2xl border border-white/20 hover:shadow-xl transition">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {user.photo ? (
            <img src={user.photo} alt={user.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            getInitials(user.name)
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
              {user.college && (
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {user.college}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">{user.reputationScore}</span>
            </div>
          </div>

          {user.bio && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{user.bio}</p>
          )}

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-3">
            {user.skills.slice(0, 3).map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
            {user.skills.length > 3 && (
              <span className="text-sm text-gray-500">+{user.skills.length - 3} more</span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span>🚀 {user.projectsCount} projects</span>
            <span>💡 {user.hackathonsCount} hackathons</span>
          </div>

          {/* Action */}
          {onConnect && (
            <button
              onClick={onConnect}
              className="w-full py-2 gradient-primary text-white rounded-lg text-sm font-semibold hover:shadow-lg transition"
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
