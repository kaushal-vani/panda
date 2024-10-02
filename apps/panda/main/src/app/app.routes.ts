import { Route } from '@angular/router';
import { AboutUsComponent } from '@panda/panda/about-us/smart';
import { AuthenticationComponent } from '@panda/panda/authentication/smart';
import { CheckOutComponent } from '@panda/panda/check-out/smart';
import { FeedBackComponent } from '@panda/panda/feed-back/smart';
import { HomeComponent } from '@panda/panda/home/smart';
import { PaymentComponent } from '@panda/panda/payment/smart';
import { ProductsComponent } from '@panda/panda/products/smart';
import {
  FeaturedPageComponent,
  SalePageComponent,
} from '@panda/panda/products/ui';
import { PageNotFoundComponent } from '@panda/panda/shared';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'authenticate', component: AuthenticationComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'feed-back', component: FeedBackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/featured', component: FeaturedPageComponent },
  { path: 'products/sale', component: SalePageComponent },
];
