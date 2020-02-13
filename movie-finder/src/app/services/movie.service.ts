import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import Movie from '../moduls/movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IN_THEATERS = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '?api_key=3e30c04c267021c7bb8537d4d9dceb01';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(BASE_URL + '/popular' + API_KEY);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(IN_THEATERS + API_KEY + '&with_release_type=2|3');  
   
  }
} 
