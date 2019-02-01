import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { PLAYERS } from './shared/players';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() {
    return PLAYERS;
  }

  getPlayerById(playerId: number) {
    for (var i = 0; i <= PLAYERS.length - 1; i++) {
      if (PLAYERS[i].id === playerId) {
        return PLAYERS[i];
      }
    }
  }

}