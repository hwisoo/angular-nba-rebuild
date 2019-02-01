import { Component, OnInit, Output } from "@angular/core";
import { Team } from "../models/team.model";
import { TEAMS } from "../shared/teams";
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../models/player.model';

@Component({
  selector: "team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  selectedTeam = TEAMS[0];
  teamPlayersToDisplay: Player[];
  constructor(private router: Router, private playerService: PlayerService) { }

  allTeams: Team[] = TEAMS;

  ngOnInit() {
    this.teamPlayersToDisplay = this.playerService.getPlayersByTeam(this.selectedTeam.img);
  }
  goToDetailPage(clickedTeam: Team) {
    this.router.navigate(['teams', clickedTeam.img]);
  };

}
