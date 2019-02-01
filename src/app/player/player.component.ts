import { Component, OnInit } from "@angular/core";
import { Player } from "../models/player.model";
import { PLAYERS } from "../shared/players";
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: "player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  providers: [PlayerService]
})

export class PlayerComponent implements OnInit {
  allPlayers: Player[];
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.allPlayers = this.playerService.getPlayers();
  }


  goToDetailPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  };
}
