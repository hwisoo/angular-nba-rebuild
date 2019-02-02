import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { Team } from '../models/team.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'team-detail',
  templateUrl: './teamdetail.component.html',
  styleUrls: ['./teamdetail.component.css'],
  providers: [PlayerService, TeamService]
})
export class TeamdetailComponent implements OnInit {
  teamId: string = null;
  teamToDisplay: Team;
  allTeams: Team[];
  teamPlayersToDisplay: Player[] = null;

  constructor(private route: ActivatedRoute,
    private location: Location, private teamService: TeamService, private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.allTeams = this.teamService.getTeams();
    console.table(this.allTeams);
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['img'];
    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId);
    this.teamPlayersToDisplay = this.playerService.getPlayersByTeam(this.teamId)
  }

  goToDetailPage(clickedTeam: Team) {
    this.router.navigate(['teams', clickedTeam.img]);
  };
  goToPlayerPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  };
  setTeamtoDisplay(team) {
    this.teamToDisplay = team;
    this.teamPlayersToDisplay = this.playerService.getPlayersByTeam(team.img);
  }




}
