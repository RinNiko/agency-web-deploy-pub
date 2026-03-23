'use client';

import { agents, mockActivities } from '@/lib/agents';
import { Plus } from 'lucide-react';

const agentPositions: Record<string, { top: string; left: string }> = {
  codex: { top: '15%', left: '65%' },
  claude: { top: '35%', left: '25%' },
  gemini: { top: '55%', left: '50%' },
  scout: { top: '65%', left: '15%' },
  quill: { top: '25%', left: '35%' },
  pixel: { top: '70%', left: '70%' },
  echo: { top: '30%', left: '55%' },
};

const desks = [
  { top: '12%', left: '25%' },
  { top: '12%', left: '50%' },
  { top: '12%', left: '72%' },
  { top: '30%', left: '42%' },
  { top: '30%', left: '62%' },
];

const plants = [
  { top: '78%', left: '8%' },
  { top: '78%', left: '82%' },
  { top: '5%', left: '88%' },
];

function timeAgo(date: Date): string {
  const mins = Math.floor((Date.now() - date.getTime()) / 60000);
  if (mins < 1) return 'just now';
  if (mins === 1) return '1 minute ago';
  return `${mins} minutes ago`;
}

export default function OfficePage() {
  return (
    <div className="office-layout">
      <div className="office-canvas">
        <div className="office-canvas-inner">
          <button className="start-chat-btn" style={{ position: 'relative', zIndex: 10 }}>
            <Plus size={16} />
            Start Chat
          </button>
          {desks.map((pos, i) => (
            <div key={`desk-${i}`} className="office-prop" style={{ top: pos.top, left: pos.left }}>
              <div className="office-desk">
                <div className="office-desk-screen" />
              </div>
            </div>
          ))}
          <div className="office-prop" style={{ top: '45%', left: '38%' }}>
            <div className="office-table" />
          </div>
          {plants.map((pos, i) => (
            <div key={`plant-${i}`} className="office-prop" style={{ top: pos.top, left: pos.left }}>
              <div className="office-plant">
                <div className="plant-leaves" />
                <div className="plant-pot" />
              </div>
            </div>
          ))}
          {agents.map((agent) => {
            const pos = agentPositions[agent.id] || { top: '50%', left: '50%' };
            return (
              <div key={agent.id} className="office-agent" style={{ top: pos.top, left: pos.left }}>
                {agent.currentTask && <div className="office-agent-task">{agent.currentTask}</div>}
                <div className="office-agent-avatar" style={{ background: `${agent.color}22`, border: `2px solid ${agent.color}44` }}>
                  {agent.avatar}
                  <div className={`agent-status-dot ${agent.status}`} />
                </div>
                <span className="office-agent-name" style={{ color: agent.color }}>{agent.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="activity-feed">
        <div className="activity-header">
          <div className="activity-title">✨ Live Activity</div>
          <span className="activity-time">Last hour</span>
        </div>
        <div className="activity-list">
          {mockActivities.map((entry) => (
            <div key={entry.id} className="activity-entry animate-in">
              <div className="activity-dot" style={{ background: entry.color }} />
              <div className="activity-content">
                <div className="activity-agent">{entry.agentName} <span>• {entry.type}</span></div>
                <div className="activity-message">{entry.message}</div>
                <div className="activity-timestamp">{timeAgo(entry.timestamp)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="agent-status-bar">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-status-card">
            <div className="agent-status-avatar" style={{ background: `${agent.color}22`, border: `1px solid ${agent.color}33` }}>
              {agent.avatar}
            </div>
            <div className="agent-status-info">
              <div className="agent-status-name">{agent.name}</div>
              <div className="agent-status-subtitle">Click for memory</div>
              {agent.currentTask ? (
                <div className="agent-status-task"><div className="task-indicator active" />{agent.currentTask}</div>
              ) : (
                <div className="agent-status-task"><div className="task-indicator idle" />Idle</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
