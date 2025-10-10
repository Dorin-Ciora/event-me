import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'event-me-general-layout',
  imports: [RouterOutlet],
  templateUrl: './general-layout.component.html',
  styleUrl: './general-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralLayoutComponent {}
