import { computed, Injectable, signal } from '@angular/core';
import { Film } from '../models/film.model';
import filmsData from '../mock-data/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films = signal<Film[]>(filmsData as Film[]);
  private searchQuery = signal<string>('');

  filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.films();
    }

    return this.films().filter((film) => film.title.toLowerCase().includes(query));
  });

  favoriteFilms = computed(() => this.films().filter((film) => film.isFavorite));

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

  getFilmById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }

  toggleFavorite(id: number) {
    this.films.update((films) =>
      films.map((film) =>
        film.id === id ? { ...film, isFavorite: !film.isFavorite } : film
      )
    );
  }
}
