export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  skills: string[];
  color: string;
  avatar: string;
  status: 'active' | 'idle' | 'offline';
  currentTask: string | null;
  tier: 'chief' | 'operations' | 'signal' | 'output' | 'meta';
}

export interface ActivityEntry {
  id: string;
  agentId: string;
  agentName: string;
  type: string;
  message: string;
  timestamp: Date;
  color: string;
}

export interface ScheduledTask {
  id: string;
  name: string;
  time: string;
  agentId: string;
  color: string;
  recurring: boolean;
}

export interface AlwaysRunningProcess {
  name: string;
  frequency: string;
}
