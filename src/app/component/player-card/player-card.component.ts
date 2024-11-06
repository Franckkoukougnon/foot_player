import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  Signal,
} from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent {
  @Input() player!: Player;

  @Output() playerSelected = new EventEmitter<Player>(); // Sortie d'événement

  // methode pour emettre l'event vers le parent
  selectPlayer() {
    console.log('Joueur sélectionné:', this.player);
    this.playerSelected.emit(this.player);
  }
}
