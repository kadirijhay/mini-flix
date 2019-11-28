import { Component, Input } from "@angular/core"
import { IMovie } from '../shared/movie.model'

@Component({
  selector: "movie-thumbnail",
  template: `
  <div [routerLink]="['/movies', movie.id]" class="well hoverwell thumbnail">
    <img [src]="movie?.imageUrl">
    <h3>{{ movie?.title }}</h3>
    <h4>{{ movie?.year }}</h4>
  </div>
  `
})

export class MovieThumbnailComponent {
  @Input() movie:IMovie
}
