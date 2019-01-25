import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TEAMS } from '../shared/teams';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  selectedTeam = null;
  constructor() { }

  ngOnInit() {

  }
  allTeams: Team[] = TEAMS;

  setSelectedTeam(team) {
    this.selectedTeam = team;
  }
}
