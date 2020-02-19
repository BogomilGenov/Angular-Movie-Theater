import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from '../../../node_modules/rxjs';
import { tap, map } from 'rxjs/operators'
import Movie from '../moduls/movie';
import MovieDetails from '../moduls/Movie-Details';
//import { from } from 'rxjs';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS = 'discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22';
const POPULAR = 'discover/movie?sort_by=popularity.desc';
const KIDS ='discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
const DRAMA ='discover/movie?with_genres=18&primary_release_year=2019'

const API_KEY = '&api_key=eb0b60942db912058636c016da7c0094';
const API_KEY_ALT = '?api_key=eb0b60942db912058636c016da7c0094';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(
    private http: HttpClient) { }

  // getPopularMovies(): Observable<Array<Movie>>{
  //   return this.http.get<Array<Movie>>(BASE_URL + POPULAR + API_KEY);
    
  // }
  getPopularMovies() {
    return this.http.get<Movie[]>(BASE_URL + POPULAR + API_KEY)
    .pipe(
      // tap((value) => console.log(value))
      map((data) => data['results'].slice(0, 6))
    );  
  }
  getInTheaterMovies() {
    return this.http.get<Movie[]>(BASE_URL + IN_THEATERS + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );;  
 }
  getPopularKidsMovies() {
    return this.http.get<Movie[]>(BASE_URL + KIDS + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );;  ;  
  }
  getBestDramaMovies() {
    return this.http.get<Movie[]>(BASE_URL + DRAMA + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );;  ;  

  }
  getMovieById(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT)
    // .pipe(tap(console.log));
    //.pipe(tap((data) => console.log(data)));
  }
searchMovie(query: string){
  return this.http.get<Movie[]>(
    BASE_URL + 'search/movie' + API_KEY_ALT + `&query=${query}`);
}
} 
