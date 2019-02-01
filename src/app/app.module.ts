import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./team/team.component";
import { PlayerComponent } from "./player/player.component";
import { PlayerdetailComponent } from "./playerdetail/playerdetail.component";

import { TeamdetailComponent } from "./teamdetail/teamdetail.component";

import { PlayerService } from "./player.service";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamComponent,
    PlayerComponent,
    TeamdetailComponent,
    PlayerdetailComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
