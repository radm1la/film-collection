import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { Duration } from '../../pipes/duration';

@Component({
  selector: 'app-film-details',
  imports: [Duration],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private filmService = inject(FilmService);

  film = computed(()=>{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.filmService.getFilmById(id);
  })

  goBack(){
    this.router.navigate(['/']);
  }
}
