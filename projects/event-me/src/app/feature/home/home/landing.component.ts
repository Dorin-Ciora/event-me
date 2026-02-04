import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingNavMenuComponent } from './components/landing-nav-menu/landing-nav-menu.component';
import { LandingBannerComponent } from './components/landing-banner/landing-banner.component';
import { LandingFeaturesComponent } from './components/landing-features/landing-features.component';
import { LandingPricingComponent } from './components/landing-pricing/landing-pricing.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingNavMenuComponent,
    LandingBannerComponent,
    LandingFeaturesComponent,
    LandingPricingComponent,
    LandingFooterComponent,
    RippleModule,
    StyleClassModule,
  ],

  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
