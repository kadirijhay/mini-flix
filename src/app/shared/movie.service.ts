import { Injectable } from "@angular/core"
import { Subject, Observable } from 'rxjs'
import { IMovie } from './movie.model';

@Injectable()
export class MovieService {
  getMovies():Observable<IMovie[]> {
    let subject = new Subject<IMovie[]>()
    setTimeout(() => { subject.next(MOVIES); subject.complete(); }, 100)
    return subject
  }

  getMovie(id:number):IMovie {
    return MOVIES.find(movie => movie.id === id)
  }
}

const MOVIES:IMovie[] = [
  {
    id: 1,
    title: "Lion King 2019",
    imageUrl: "/assets/images/sunflower.jpg",
    year: 2019
  },
  {
    id: 2,
    title: "Notebook",
    imageUrl: "/assets/images/sunflower.jpg",
    year: 2017
  },
  {
    id: 3,
    title: "Lion Heart",
    imageUrl: "/assets/images/sunflower.jpg",
    year: 2019
  }
]
