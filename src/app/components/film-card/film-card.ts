import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../models/film.model';
import { Duration } from '../../pipes/duration';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [RouterLink, Duration],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  @Input() film!: Film;
  @Output() favoriteToggle = new EventEmitter<number>();

  toggleFavorite() {
    this.favoriteToggle.emit(this.film.id);
  }
}
