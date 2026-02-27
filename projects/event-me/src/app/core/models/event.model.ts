export interface Event {
  id: string;
  name: string;
  type: EventType;
  createdAt: string;
}

export type EventType = 'wedding' | 'birthday' | 'other';

export interface CreateEventPayload {
  name: string;
  type: string;
}
