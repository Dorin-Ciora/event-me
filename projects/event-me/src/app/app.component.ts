import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  template: `
    <p-toast position="bottom-left" key="bl" />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'event-me';
}
