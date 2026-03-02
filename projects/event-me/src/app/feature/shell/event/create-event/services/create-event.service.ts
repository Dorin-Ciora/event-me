import { inject, Injectable } from '@angular/core';
import { EventService } from '../../../../../core/event/event.service';
import { CurrentEventService } from '../../../../../core/event/current-event.service';
import {
  CreateEventPayload,
  Event,
} from '../../../../../core/models/event.model';

@Injectable()
export class CreateEventService {
  eventService = inject(EventService);
  currentEvent = inject(CurrentEventService);

  async createAndActivate(payload: CreateEventPayload): Promise<Event> {
    const event = await this.eventService.createEvent(payload);
    this.currentEvent.set(event);

    return event;
  }
}
