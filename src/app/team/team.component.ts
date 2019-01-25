import { Component, OnInit, Output } from '@angular/core';
import { Team } from '../models/team.model';
import { TEAMS } from '../shared/teams';
import { EventEmitter } from 'events';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  selectedTeam = TEAMS[0];
  constructor() { }

  ngOnInit() {

  }
  allTeams: Team[] = TEAMS;

  @Output() clickSelectedContact = new EventEmitter();

  setSelectedTeam(team) {
    this.selectedTeam = team;
    console.table(team);
    return this.selectedTeam;
  }
}
