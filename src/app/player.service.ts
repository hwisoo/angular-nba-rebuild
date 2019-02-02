import { Injectable } from '@angular/core';
import { PLAYERS } from './shared/players';
import { Player } from './models/player.model';

@Injectable()
export class PlayerService {


  constructor() { }

  teamPlayers: Player[] = [];


  getPlayers() {
    return PLAYERS;
  }

  getPlayerById(playerId: number) {
    for (let i = 0; i <= PLAYERS.length - 1; i++) {
      if (PLAYERS[i].id === playerId) {
        return PLAYERS[i];
      }
    }
  }

  getPlayersByTeam(teamId: string) {
    this.teamPlayers.length = 0;
    for (let i = 0; i < PLAYERS.length; i++) {
      if (PLAYERS[i].team == teamId) {
        this.teamPlayers.push(PLAYERS[i]);
      }
    }
    return this.teamPlayers;
  }

}
