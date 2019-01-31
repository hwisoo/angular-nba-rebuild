import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./team/team.component";
import { PlayerComponent } from "./player/player.component";
import { TeamdetailComponent } from "./teamdetail/teamdetail.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "teams", component: TeamComponent },
  { path: "teams/ :img", component: TeamdetailComponent },
  { path: "players", component: PlayerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
