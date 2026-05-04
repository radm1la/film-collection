import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { FilmCard } from '../../components/film-card/film-card';
import { Autofocus } from '../../directives/autofocus';

@Component({
  selector: 'app-home',
  imports: [FilmCard,Autofocus],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  filmService = inject(FilmService);

  onSearch(e:Event){
    const value = (e.target as HTMLInputElement).value;
    this.filmService.setSearchQuery(value);
  }
}
