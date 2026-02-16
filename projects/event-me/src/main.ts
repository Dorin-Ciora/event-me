import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthStore } from './app/core/auth/auth.store';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    const authStore = appRef.injector.get(AuthStore);
    authStore.init();
  })
  .catch((err) => console.error(err));
