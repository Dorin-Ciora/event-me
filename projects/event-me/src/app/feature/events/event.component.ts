import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'event-me-events',
  templateUrl: 'event.component.html',
  imports: [
    ButtonModule,
    CardModule,
    StepperModule,
    ToggleButtonModule,
    CommonModule,
    InputTextModule,
    SelectModule,
    FormsModule,
  ],
})
export class EventComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  activeStep: number = 1;
  cities = [{ name: 'Nunta', value: 'wedding' }];
  selected = 'wedding';

  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
