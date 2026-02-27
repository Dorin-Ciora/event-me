import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EventService } from '../event/event.service';

export const createEventGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const eventService = inject(EventService);

  const hasEvent = await eventService.hasAnyEvent();

  return hasEvent ? router.createUrlTree(['/app/dashboard']) : true;
};
