import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'event-me-guest',
  imports: [],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestComponent { }
