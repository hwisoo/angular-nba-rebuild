import { Component, Input } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private playerService: PlayerService) {

  }

  ngOnInit() {

  }
  title = 'app';

  @Input() selectedTeam;
}
