import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideCore } from './core/core';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes }), MessageService],
};
