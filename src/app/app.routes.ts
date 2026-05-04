import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { FilmDetails } from './pages/film-details/film-details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"film/:id",component:FilmDetails},
    {path:"**",component:NotFound}
];
