import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../infrastructure/supabase/supabase.service';
import { CreateEventPayload, Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  supabase = inject(SupabaseService);

  async createEvent(payload: CreateEventPayload): Promise<Event> {
    const { data, error } = await this.supabase.client
      .from('events')
      .insert(payload)
      .select()
      .single();

    if (error) throw error;

    return data as Event;
  }

  async hasAnyEvent(): Promise<boolean> {
    const { data, error } = await this.supabase.client
      .from('events')
      .select('id')
      .limit(1);

    if (error) throw error;

    return (data?.length ?? 0) > 0;
  }
}
