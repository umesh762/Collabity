import { Opportunity } from '@/types';
import { formatRelativeTime } from '@/lib/utils';
import { Calendar, MapPin, DollarSign, Clock, Users } from 'lucide-react';
import { SkillTag } from './SkillTag';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onApply?: () => void;
}

export const OpportunityCard = ({ opportunity, onApply }: OpportunityCardProps) => {
  const typeIcons = {
    hackathon: '🏆',
    gig: '💼',
    'learning-group': '📚',
    startup: '🚀',
    project: '🔨',
  };

  const typeColors = {
    hackathon: 'bg-purple-100 text-purple-700',
    gig: 'bg-green-100 text-green-700',
    'learning-group': 'bg-blue-100 text-blue-700',
    startup: 'bg-pink-100 text-pink-700',
    project: 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div className="glass p-6 rounded-2xl border border-white/20 hover:shadow-xl transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[opportunity.type]}`}>
              {typeIcons[opportunity.type]} {opportunity.type.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{opportunity.title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">{opportunity.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {opportunity.skillsNeeded.slice(0, 4).map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
        {opportunity.skillsNeeded.length > 4 && (
          <span className="text-sm text-gray-500">+{opportunity.skillsNeeded.length - 4} more</span>
        )}
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
        {opportunity.deadline && (
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatRelativeTime(opportunity.deadline)}
          </span>
        )}
        {opportunity.location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {opportunity.location}
          </span>
        )}
        {opportunity.isRemote && (
          <span className="flex items-center gap-1">
            🌍 Remote
          </span>
        )}
        {opportunity.compensation && (
          <span className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {opportunity.compensation}
          </span>
        )}
        {opportunity.maxApplicants && (
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {opportunity.applicants?.length || 0}/{opportunity.maxApplicants}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
            {opportunity.postedByPhoto ? (
              <img src={opportunity.postedByPhoto} alt="" className="w-full h-full rounded-full object-cover" />
            ) : (
              opportunity.postedByName[0]
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{opportunity.postedByName}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatRelativeTime(opportunity.createdAt)}
            </p>
          </div>
        </div>

        {onApply && (
          <button
            onClick={onApply}
            className="px-4 py-2 gradient-primary text-white rounded-lg text-sm font-semibold hover:shadow-lg transition"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
};
