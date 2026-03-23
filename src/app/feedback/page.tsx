'use client';

import { agents, mockActivities } from '@/lib/agents';
import { ThumbsUp, AlertTriangle, CheckCircle } from 'lucide-react';

const feedbackEntries = [
  { id: '1', agent: agents[0], badge: 'Task Completed', badgeColor: { bg: 'rgba(34,197,94,0.15)', text: '#22c55e' }, message: 'Morning coordination workflow completed successfully. All sub-agents received their assignments on time.', time: '2 min ago', quality: 'excellent' },
  { id: '2', agent: agents[1], badge: 'PR Merged', badgeColor: { bg: 'rgba(59,130,246,0.15)', text: '#3b82f6' }, message: 'Infrastructure update #142 merged after passing all QA checks. Voice endpoint deployed to production.', time: '5 min ago', quality: 'good' },
  { id: '3', agent: agents[2], badge: 'QA Issue', badgeColor: { bg: 'rgba(234,179,8,0.15)', text: '#eab308' }, message: 'Cross-posting engine v2 showed formatting inconsistency on LinkedIn posts. Sent back for revision.', time: '12 min ago', quality: 'needs-review' },
  { id: '4', agent: agents[3], badge: 'Trend Found', badgeColor: { bg: 'rgba(132,204,22,0.15)', text: '#84cc16' }, message: 'New trend detected: "Vibe coding startups" gaining traction on HackerNews and Twitter.', time: '15 min ago', quality: 'good' },
  { id: '5', agent: agents[4], badge: 'Content Ready', badgeColor: { bg: 'rgba(6,182,212,0.15)', text: '#06b6d4' }, message: 'Blog post "Why Every Founder Needs an AI Team" drafted and ready for review (2,400 words).', time: '20 min ago', quality: 'excellent' },
  { id: '6', agent: agents[6], badge: 'Published', badgeColor: { bg: 'rgba(236,72,153,0.15)', text: '#ec4899' }, message: 'Newsletter dispatched to 2,400 subscribers. Open rate tracking initiated.', time: '30 min ago', quality: 'good' },
];

const qualityIcons: Record<string, React.ReactElement> = {
  excellent: <CheckCircle size={14} style={{ color: 'var(--accent-green)' }} />,
  good: <ThumbsUp size={14} style={{ color: 'var(--accent-blue)' }} />,
  'needs-review': <AlertTriangle size={14} style={{ color: 'var(--accent-yellow)' }} />,
};

export default function FeedbackPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Feedback & Logs</h1>
        <p className="page-subtitle">Recent agent activities, quality metrics, and output reviews</p>
      </div>
      <div className="system-grid" style={{ marginBottom: 24 }}>
        <div className="system-card animate-in"><div className="system-stat">{mockActivities.length}</div><div className="system-stat-label">Activities (last hour)</div></div>
        <div className="system-card animate-in"><div className="system-stat" style={{ background: 'linear-gradient(135deg, var(--accent-green), var(--accent-lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>85%</div><div className="system-stat-label">Quality Score</div></div>
        <div className="system-card animate-in"><div className="system-stat" style={{ background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{agents.filter((a) => a.status === 'active').length}</div><div className="system-stat-label">Active Agents</div></div>
      </div>
      <div className="feedback-grid">
        {feedbackEntries.map((entry) => (
          <div key={entry.id} className="feedback-card animate-in">
            <div className="feedback-card-header">
              <div style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: `${entry.agent.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{entry.agent.avatar}</div>
              <div><div style={{ fontSize: 13, fontWeight: 600 }}>{entry.agent.name}</div><div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{entry.agent.role}</div></div>
              <div className="feedback-card-badge" style={{ background: entry.badgeColor.bg, color: entry.badgeColor.text, marginLeft: 'auto' }}>{entry.badge}</div>
            </div>
            <p className="feedback-message">{entry.message}</p>
            <div className="feedback-meta">
              <span>{entry.time}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{qualityIcons[entry.quality]}<span style={{ textTransform: 'capitalize' }}>{entry.quality.replace('-', ' ')}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
