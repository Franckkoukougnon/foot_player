import { Component, inject } from '@angular/core';
import { PlayerService } from '../../service/player/player.service';
import { Player } from '../../models/player.model';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from '../../component/player-card/player-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  playerService = inject(PlayerService); // Injection du service PlayerService

  constructor() {}

  players: Player[] = [
    new Player(1, 'Player 1', 'Player 1 description'),
    new Player(2, 'Player 2', 'Player 2 description'),
    new Player(3, 'Player 3', 'Player 3 description'),
    new Player(4, 'Player 4', 'Player 4 description'),
    new Player(5, 'Player 5', 'Player 5 description'),
    new Player(6, 'Player 6', 'Player 6 description'),
  ];

  selectedPlayer: Player | null = null; // Variable pour stocker le joueur sélectionné

  // Méthode pour gérer l'événement de sélection
  onPlayerSelected(player: Player) {
    this.selectedPlayer = player; // Mettre à jour le joueur sélectionné
    this.playerService.hello(); // Appeler la méthode hello du service PlayerService
  }
}
