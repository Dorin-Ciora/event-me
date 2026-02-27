import { computed, Injectable, signal } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentEventService {
  private readonly _currentEvent = signal<Event | null>(null);

  readonly currentEvent = this._currentEvent.asReadonly();

  readonly currentEventId = computed(() => this._currentEvent()?.id ?? null);
  readonly hasCurrentEvent = computed(() => !!this._currentEvent());

  set(event: Event) {
    this._currentEvent.set(event);
  }

  clear() {
    this._currentEvent.set(null);
  }
}
