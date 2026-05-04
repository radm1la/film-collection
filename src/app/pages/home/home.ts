import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { RouterLink } from '@angular/router';
import { Duration } from '../../pipes/duration';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Duration],
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
