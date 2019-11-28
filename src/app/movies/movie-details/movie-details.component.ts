import { Component } from "@angular/core"
import { MovieService } from '../../shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/shared/movie.model';

@Component({
  template: `
    <div>
      <div>
        <img [src]="movie?.imageUrl">
        <h2>{{ movie?.title }}</h2>
      </div>
      <div>
        <h4>Rated:</h4>
        <h4>Released: {{ movie?.year }}</h4>
        <h4>Runtime:</h4>
        <h4>Genre:</h4>
        <h4>Director:</h4>
        <h4>Writer:</h4>
        <h4>Actors:</h4>
        <h4>Plot:</h4>
        <h4>Language: English</h4>
        <h4>Country:</h4>
        <h4>Awards:</h4>
      </div>
    </div>
  `
})

export class MovieDetailsComponent {
  movie:IMovie

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.movie = this.movieService.getMovie(+this.route.snapshot.params["id"])
  }
}
