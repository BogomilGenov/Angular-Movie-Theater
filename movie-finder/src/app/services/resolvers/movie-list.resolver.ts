import { Injectable } from '@angular/core';
import { 
  Resolve, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot 
} from '@angular/router';
import { forkJoin } from 'rxjs'
import Movie from '../../moduls/movie';
import { MovieService } from '../movie.service';

@Injectable()
export class MovieListResolver implements Resolve<Movie[]> {
  
  constructor(
    private movieService: MovieService
  ) { }
  
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return forkJoin (
      this.movieService.getBestDramaMovies(),
      this.movieService.getPopularKidsMovies(),
      this.movieService.getPopularMovies(),
      this.movieService.getInTheaterMovies(), 
    )

     
  }
  
}
