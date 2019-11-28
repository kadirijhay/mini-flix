import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { Routes } from '@angular/router';
import { Error404Component } from './404.component';
import { MovieRouteActivator } from './movies/movie-details/movie-route-activator.service';
import { MoviesListResolver } from './movies/movies-list-resolver.service';

export const appRoutes:Routes = [
  {
    path: "movies",
    component: MoviesListComponent,
    resolve: {movies:MoviesListResolver}
  },
  {
    path: "movies/:id",
    component: MovieDetailsComponent,
    canActivate: [MovieRouteActivator]
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "",
    redirectTo: "/movies",
    pathMatch: "full"
  }
]
