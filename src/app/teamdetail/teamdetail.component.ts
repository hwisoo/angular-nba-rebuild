import { Component, OnInit, Input } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { Team } from '../models/team.model';

@Component({
  selector: 'team-detail',
  templateUrl: './teamdetail.component.html',
  styleUrls: ['./teamdetail.component.css']
})
export class TeamdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() selectedTeam;
}
