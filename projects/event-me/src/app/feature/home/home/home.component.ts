import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeNavMenuComponent } from './components/home-nav-menu/home-nav-menu.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomePricingComponent } from './components/home-pricing/home-pricing.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-home',
  imports: [
    HomeNavMenuComponent,
    HomeBannerComponent,
    HomeFeaturesComponent,
    HomePricingComponent,
    RippleModule,
    StyleClassModule,
  ],

  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
