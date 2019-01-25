import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TeamComponent } from '../team/team.component';
import { PlayerComponent } from '../player/player.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'players', component: PlayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];