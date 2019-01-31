import { Component, OnInit } from "@angular/core";
import { Player } from "../models/player.model";
import { PLAYERS } from "../shared/players";

@Component({
  selector: "player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  allPlayers: Player[] = PLAYERS;
}
