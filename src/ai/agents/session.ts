import 'server-only';
import { randomUUID } from 'node:crypto';
import type { AgentMessage, AgentHandoff } from '@/contracts/ai';

// Memória de sessão server-side (em memória por processo).
// Em produção real, trocar por tabela `agent_sessions` no Supabase.
// Nunca persistir dados sensíveis de usuário; só trace de agentes.

interface SessionData {
  id: string;
  createdAt: string;
  messages: AgentMessage[];
  handoffs: AgentHandoff[];
}

const sessions = new Map<string, SessionData>();
const MAX_SESSIONS = 200;
const MAX_MESSAGES_PER_SESSION = 50;

export function createSession(): SessionData {
  if (sessions.size >= MAX_SESSIONS) {
    const oldest = sessions.keys().next().value;
    if (oldest) sessions.delete(oldest);
  }
  const session: SessionData = { id: randomUUID(), createdAt: new Date().toISOString(), messages: [], handoffs: [] };
  sessions.set(session.id, session);
  return session;
}

export function getSession(id: string): SessionData | undefined {
  return sessions.get(id);
}

export function appendMessage(sessionId: string, message: AgentMessage): void {
  const s = sessions.get(sessionId);
  if (!s) return;
  s.messages.push(message);
  if (s.messages.length > MAX_MESSAGES_PER_SESSION) s.messages.shift();
}

export function appendHandoff(sessionId: string, handoff: AgentHandoff): void {
  const s = sessions.get(sessionId);
  if (!s) return;
  s.handoffs.push(handoff);
}
