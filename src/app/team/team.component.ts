import { Component, OnInit, Output } from "@angular/core";
import { Team } from "../models/team.model";
import { TEAMS } from "../shared/teams";
import { Router } from '@angular/router';

@Component({
  selector: "team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  selectedTeam = TEAMS[0];
  constructor(private router: Router) { }

  allTeams: Team[] = TEAMS;

  ngOnInit() {

  }


  goToDetailPage(clickedTeam: Team) {
    this.router.navigate(['teams', clickedTeam.img]);
  };
}
