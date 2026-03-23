'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileText, CheckSquare, Users2, Calendar, FolderKanban,
  Brain, BookOpen, UserCircle, Building2, Network,
  Monitor, Radio, Factory, GitBranch, FlaskConical,
  MessageSquare
} from 'lucide-react';

const navItems = [
  { href: '/content', label: 'Content', icon: FileText },
  { href: '/approvals', label: 'Approvals', icon: CheckSquare },
  { href: '/council', label: 'Council', icon: Users2 },
  { href: '/calendar', label: 'Calendar', icon: Calendar },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/memory', label: 'Memory', icon: Brain },
  { href: '/docs', label: 'Docs', icon: BookOpen },
  { href: '/people', label: 'People', icon: UserCircle },
  { href: '/office', label: 'Office', icon: Building2 },
  { href: '/team', label: 'Team', icon: Network },
  { href: '/system', label: 'System', icon: Monitor },
  { href: '/radar', label: 'Radar', icon: Radio },
  { href: '/factory', label: 'Factory', icon: Factory },
  { href: '/pipeline', label: 'Pipeline', icon: GitBranch },
  { href: '/ai-lab', label: 'AI Lab', icon: FlaskConical },
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">⚡ AgencyWeb</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/office');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
