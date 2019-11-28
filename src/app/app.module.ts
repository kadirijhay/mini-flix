import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { NavbarComponent } from './nav/navbar.component';
import { MoviesAppComponent } from './movies/movies-app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { Error404Component } from './404.component';

import { MovieService } from './shared/movie.service';
import { MovieRouteActivator } from './movies/movie-details/movie-route-activator.service';
import { MoviesListResolver } from './movies/movies-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavbarComponent,
    MoviesAppComponent,
    MoviesListComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent,
    Error404Component
  ],
  providers: [
    MovieService,
    MovieRouteActivator,
    MoviesListResolver,
  ],
  bootstrap: [MoviesAppComponent]
})
export class AppModule { }
