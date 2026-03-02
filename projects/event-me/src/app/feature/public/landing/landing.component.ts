import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingNavMenuComponent } from './components/landing-nav-menu/landing-nav-menu.component';
import { LandingBannerComponent } from './components/landing-banner/landing-banner.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-home',
  imports: [
    LandingNavMenuComponent,
    LandingBannerComponent,
    RippleModule,
    StyleClassModule,
  ],

  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
