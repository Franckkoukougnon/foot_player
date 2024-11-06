import { Component, inject } from '@angular/core';
import { PlayerCardComponent } from './component/player-card/player-card.component';
import { Player } from './models/player.model';
import { CommonModule } from '@angular/common';
import { PlayerService } from './service/player/player.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {}
