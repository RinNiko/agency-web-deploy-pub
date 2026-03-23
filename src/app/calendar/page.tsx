'use client';

import { scheduledTasks, alwaysRunning, daysOfWeek } from '@/lib/agents';
import { Zap, Calendar as CalendarIcon } from 'lucide-react';

export default function CalendarPage() {
  const today = new Date().getDay();

  return (
    <div className="page-container">
      <div className="calendar-always-running animate-in">
        <div className="calendar-always-label">
          <Zap size={16} style={{ color: 'var(--accent-yellow)' }} />
          Always Running
        </div>
        <div className="always-running-items">
          {alwaysRunning.map((proc) => (
            <div key={proc.name} className="always-running-item">
              {proc.name} • {proc.frequency}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day, dayIndex) => (
          <div key={day} className="calendar-day">
            <div className={`calendar-day-header ${dayIndex === today ? 'today' : ''}`}>{day}</div>
            <div className="calendar-tasks">
              {scheduledTasks.map((task) => (
                <div key={task.id} className="calendar-task" style={{ background: `${task.color}22`, borderLeft: `3px solid ${task.color}` }}>
                  <div>{task.name}</div>
                  <div className="calendar-task-time">{task.time}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="calendar-next-up animate-in">
        <div className="calendar-next-label">
          <CalendarIcon size={16} />
          Next Up
        </div>
        <div className="next-up-item">
          <span className="next-up-name">Reaction Poller</span>
          <span className="next-up-time">in 36 min</span>
        </div>
        <div className="next-up-item">
          <span className="next-up-name">Trend Radar</span>
          <span className="next-up-time">in 2h 15min</span>
        </div>
      </div>
    </div>
  );
}
