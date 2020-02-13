import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../moduls/movie'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  singleMovie: Movie;
  message = null;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      //console.log('from compontent')
      this.popularMovies = data['results'].slice(0, 6);
      //console.log('popular movies' + this.popularMovies);
      this.singleMovie = this.popularMovies[0];
    });
    this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(0, 6);
    })
  }

  fromChild(event) {
   console.log(event);
   this.message = event; 
  }

} 
