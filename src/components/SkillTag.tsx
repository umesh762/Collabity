import { cn, getSkillColor } from '@/lib/utils';

interface SkillTagProps {
  skill: string;
  onRemove?: () => void;
  className?: string;
}

export const SkillTag = ({ skill, onRemove, className }: SkillTagProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium',
        getSkillColor(skill),
        className
      )}
    >
      {skill}
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:opacity-70 transition"
          aria-label="Remove skill"
        >
          ×
        </button>
      )}
    </span>
  );
};
