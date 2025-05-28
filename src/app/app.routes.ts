import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'wishlist', component: WishlistComponent},
];
