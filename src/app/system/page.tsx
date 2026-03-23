'use client';

import { agents } from '@/lib/agents';
import { Monitor, Cpu, Zap, Server, Shield } from 'lucide-react';

export default function SystemPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">System Health</h1>
        <p className="page-subtitle">OpenClaw gateway status and resource monitoring</p>
      </div>
      <div className="system-grid">
        <div className="system-card animate-in">
          <div className="system-card-title"><Server size={18} /> Gateway Status</div>
          <div className="system-status" style={{ marginBottom: 16 }}>
            <div className="system-status-dot" />
            <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Connected</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Host</span><span>127.0.0.1:18789</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Backend</span><span>ACPX</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Auth Mode</span><span>Token</span></div>
          </div>
        </div>
        <div className="system-card animate-in">
          <div className="system-card-title"><Zap size={18} /> Active Sessions</div>
          <div className="system-stat">{agents.filter((a) => a.status === 'active').length}</div>
          <div className="system-stat-label">of 8 max concurrent sessions</div>
          <div style={{ marginTop: 12, height: 6, background: 'var(--bg-surface)', borderRadius: 3 }}>
            <div style={{ height: '100%', width: `${(agents.filter((a) => a.status === 'active').length / 8) * 100}%`, background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))', borderRadius: 3, transition: 'width 0.5s ease' }} />
          </div>
        </div>
        <div className="system-card animate-in">
          <div className="system-card-title"><Cpu size={18} /> Agents Online</div>
          <div className="system-stat">{agents.length}</div>
          <div className="system-stat-label">agents configured</div>
        </div>
        <div className="system-card animate-in">
          <div className="system-card-title"><Shield size={18} /> ACP Configuration</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Dispatch</span><span style={{ color: 'var(--accent-green)' }}>Enabled</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Permission Mode</span><span>Approve All</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Max Subagents</span><span>8</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span style={{ color: 'var(--text-muted)' }}>Runtime TTL</span><span>120 min</span></div>
          </div>
        </div>
      </div>
      <div className="system-card animate-in" style={{ marginBottom: 16 }}>
        <div className="system-card-title"><Monitor size={18} /> Model Configuration</div>
        <div className="model-list">
          <div className="model-item"><span className="model-name">openai-codex/gpt-5.4</span><span className="model-badge">Primary</span></div>
          <div className="model-item"><span className="model-name">trollllm-claude-opus-4-6/claude-opus-4.6</span><span className="model-badge fallback">Fallback</span></div>
          <div className="model-item"><span className="model-name">google/gemini-3.1-pro-preview</span><span className="model-badge fallback">Fallback</span></div>
        </div>
      </div>
      <div className="system-card animate-in">
        <div className="system-card-title"><Cpu size={18} /> Allowed Agent Backends</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['codex', 'claude', 'gemini'].map((a) => (
            <span key={a} className="skill-tag" style={{ background: 'rgba(59,130,246,0.12)', borderColor: 'rgba(59,130,246,0.25)', color: '#60a5fa', fontSize: 13, padding: '6px 14px' }}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
