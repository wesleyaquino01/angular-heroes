import { Routes } from '@angular/router';
import { DashboardComponent } from '../app/shared/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/shared/components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../app/shared/components/heroes/heroes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];
