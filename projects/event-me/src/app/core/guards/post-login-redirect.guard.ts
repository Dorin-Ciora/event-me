import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EventService } from '../event/event.service';

export const postLoginRedirectGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const eventService = inject(EventService);

  try {
    const hasEvent = await eventService.hasAnyEvent();
    return router.createUrlTree([
      hasEvent ? '/app/dashboard' : '/app/create-event',
    ]);
  } catch {
    return router.createUrlTree(['/']);
  }
};
