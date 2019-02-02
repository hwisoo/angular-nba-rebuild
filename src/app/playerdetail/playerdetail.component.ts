import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../models/player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-playerdetail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css'],
  providers: [PlayerService]
})
export class PlayerdetailComponent implements OnInit {
  playerId: number = null;
  playerToDisplay: Player;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = parseInt(urlParameters['id']);
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

  goToTeamPage(clickedTeam: string) {
    this.router.navigate(['teams', clickedTeam]);
  };
}
