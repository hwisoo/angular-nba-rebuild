import { Injectable } from '@angular/core';
import { TEAMS } from './shared/teams';

@Injectable()
export class TeamService {

  constructor() { }

  getTeams() {
    return TEAMS;
  }

  getTeamById(teamId: string) {
    for (var i = 0; i <= TEAMS.length - 1; i++) {
      if (TEAMS[i].img == teamId) {
        return TEAMS[i];
      }
    }
  }
}
