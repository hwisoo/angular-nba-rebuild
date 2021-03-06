import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PlayerComponent } from "./player/player.component";
import { PlayerdetailComponent } from "./playerdetail/playerdetail.component";

import { TeamdetailComponent } from "./teamdetail/teamdetail.component";

import { PlayerService } from "./player.service";
import { routing } from "./app.routing";
import { TeamService } from "./team.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlayerComponent,
    TeamdetailComponent,
    PlayerdetailComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
