import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { CreateEventPayload } from '../../../../core/models/event.model';
import { MessageModule } from 'primeng/message';
import { CreateEventService } from './services/create-event.service';
import { NotificationService } from '../../../../core/notifications/notifications.service';

@Component({
  selector: 'event-me-create-event',
  templateUrl: 'create-event.component.html',
  imports: [
    ButtonModule,
    CardModule,
    StepperModule,
    ToggleButtonModule,
    InputTextModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    MessageModule,
  ],
  providers: [CreateEventService],
})
export class CreateEventComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly createEventService = inject(CreateEventService);
  private readonly notification = inject(NotificationService);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    type: ['wedding', Validators.required],
  });
  isLoading = false;
  errorMsg = '';

  get name() {
    return this.form.controls.name;
  }
  get type() {
    return this.form.controls.type;
  }

  activeStep: number = 1;
  cities = [{ name: 'Wedding', value: 'wedding' }];

  async createEvent() {
    this.isLoading = true;
    this.errorMsg = '';
    const payload: CreateEventPayload = {
      name: this.name.value,
      type: this.type.value,
    };

    try {
      const event = await this.createEventService.createAndActivate(payload);
      this.notification.success('The event was created');
      await this.router.navigate(['/event', event.id]);
    } catch (error: any) {
      this.errorMsg = error?.message ?? 'Failed to create event';
    } finally {
      this.isLoading = false;
    }
  }
}
