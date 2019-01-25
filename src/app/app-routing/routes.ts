import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'players', component: PlayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];