import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'event-me-landing-layout',
  imports: [RouterOutlet],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayoutComponent {}
