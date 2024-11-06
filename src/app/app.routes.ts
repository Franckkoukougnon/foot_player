import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlayerCardComponent } from './component/player-card/player-card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige vers 'home' par défaut
  { path: 'home', component: HomeComponent }, // Route pour la page d'accueil
  {
    path: 'player',
    children: [
      { path: 'card', component: PlayerCardComponent },
      { path: 'id', component: PlayerCardComponent },
    ],
  }, // Route pour le composant PlayerCard
  { path: '**', component: NotFoundComponent }, // Page 404 pour les routes inexistantes
];
