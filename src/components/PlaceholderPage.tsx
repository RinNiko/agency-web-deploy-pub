import { LucideIcon } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function PlaceholderPage({ title, description, icon: Icon }: PlaceholderProps) {
  return (
    <div className="page-container">
      <div className="placeholder-page">
        <div className="placeholder-icon">
          <Icon />
        </div>
        <h1 className="placeholder-title">{title}</h1>
        <p className="placeholder-desc">{description}</p>
        <div className="placeholder-badge">Coming Soon</div>
      </div>
    </div>
  );
}
