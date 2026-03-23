'use client';

import { agents } from '@/lib/agents';
import { ArrowRight } from 'lucide-react';

export default function TeamPage() {
  const chief = agents.find((a) => a.tier === 'chief');
  const operations = agents.filter((a) => a.tier === 'operations');
  const signals = agents.filter((a) => a.tier === 'signal');
  const outputs = agents.filter((a) => a.tier === 'output');

  const skillColors: Record<string, { bg: string; border: string; text: string }> = {
    'Orchestration': { bg: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.3)', text: '#818cf8' },
    'Clarity': { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)', text: '#60a5fa' },
    'Delegation': { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.3)', text: '#22d3ee' },
    'Coding': { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.3)', text: '#fb923c' },
    'Infrastructure': { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)', text: '#facc15' },
    'Automation': { bg: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)', text: '#f472b6' },
    'Quality Assurance': { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)', text: '#f87171' },
    'Monitoring': { bg: 'rgba(132,204,22,0.15)', border: 'rgba(132,204,22,0.3)', text: '#a3e635' },
    'Demo Recording': { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.3)', text: '#c084fc' },
    'Speed': { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.3)', text: '#fb923c' },
    'Radar': { bg: 'rgba(132,204,22,0.15)', border: 'rgba(132,204,22,0.3)', text: '#a3e635' },
    'Intuition': { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)', text: '#facc15' },
    'Voice': { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)', text: '#60a5fa' },
    'Quality': { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.3)', text: '#22d3ee' },
    'Design': { bg: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)', text: '#f472b6' },
    'Visual': { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)', text: '#f87171' },
    'Attention': { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.3)', text: '#fb923c' },
    'Style': { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.3)', text: '#c084fc' },
    'Viral': { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)', text: '#f87171' },
    'Reach': { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.3)', text: '#22d3ee' },
  };

  const defaultSkill = { bg: 'rgba(100,116,139,0.15)', border: 'rgba(100,116,139,0.3)', text: '#94a3b8' };

  const RoleCard = ({ agent, wide }: { agent: typeof agents[0]; wide?: boolean }) => (
    <div className="role-card animate-in" style={wide ? { width: '100%' } : {}}>
      <div className="role-card-header">
        <div className="role-card-avatar" style={{ background: `${agent.color}22`, border: `2px solid ${agent.color}44` }}>
          {agent.avatar}
        </div>
        <div className="role-card-title">
          <h3>{agent.name}</h3>
          <p>{agent.role}</p>
        </div>
      </div>
      <p className="role-card-desc">{agent.description}</p>
      <div className="role-card-skills">
        {agent.skills.map((skill) => {
          const s = skillColors[skill] || defaultSkill;
          return (
            <span key={skill} className="skill-tag" style={{ background: s.bg, borderColor: s.border, color: s.text }}>
              {skill}
            </span>
          );
        })}
      </div>
      <div className="role-card-link">ROLE CARD <ArrowRight size={12} /></div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="team-header">
        <p>We wanted to see what happens when AI doesn&apos;t just answer questions &mdash; but actually runs a company. Research markets. Write content. Post on social media. Ship products. All without being told what to do.</p>
      </div>
      {chief && <div className="team-chief"><RoleCard agent={chief} wide /></div>}
      {operations.length > 0 && (
        <div className="team-tier">
          <div className="team-tier-label">🖥 OPERATIONS</div>
          <div className="team-grid">{operations.map((a) => <RoleCard key={a.id} agent={a} />)}</div>
        </div>
      )}
      {signals.length > 0 && (
        <div className="team-tier">
          <div className="team-tier-label">↓ INPUT SIGNAL</div>
          <div className="team-grid">{signals.map((a) => <RoleCard key={a.id} agent={a} />)}</div>
        </div>
      )}
      {outputs.length > 0 && (
        <div className="team-tier">
          <div className="team-tier-label">OUTPUT ACTION ↓</div>
          <div className="team-grid">{outputs.map((a) => <RoleCard key={a.id} agent={a} />)}</div>
        </div>
      )}
    </div>
  );
}
