import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';

@Injectable()
export class MovieRouteActivator implements CanActivate {
  constructor(private movieService: MovieService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExixts = !!this.movieService.getMovie(+route.params["id"])

    if(!eventExixts) {
      this.router.navigate(["404"])
    }

    return eventExixts
  }
}
