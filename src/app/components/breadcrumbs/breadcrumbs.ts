import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {

    private router = inject(Router);
    private filmService = inject(FilmService);
  
  private navEnd = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd)));

  crumbs = computed(() => {
    this.navEnd();

    const url = this.router.url;

    const filmMatch = url.match(/\/films\/(\d+)/);
    if (filmMatch) {
      const film = this.filmService.getFilmById(Number(filmMatch[1]));
      return [
        { label: 'Home', path: '/' },
        { label: film?.title ?? "Film",url:null}
      ];
    }
    
    if(url === '/about') {
        return [
            { label: 'Home', path: '/' },
            { label: 'About', url:null }
        ]
    }

    return [{ label: 'Home', url: null }];
  });
}
