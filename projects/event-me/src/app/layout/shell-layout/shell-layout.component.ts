import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'event-me-shell-layout',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './shell-layout.component.html',
  styleUrl: './shell-layout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {}
