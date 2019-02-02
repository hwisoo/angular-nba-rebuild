import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PlayerComponent } from "./player/player.component";
import { TeamdetailComponent } from "./teamdetail/teamdetail.component";
import { PlayerdetailComponent } from "./playerdetail/playerdetail.component";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "teams/:img", component: TeamdetailComponent },
  { path: "players", component: PlayerComponent },
  { path: "players/:id", component: PlayerdetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
