import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../moduls/movie'
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router'; // d

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy{
  // ngOnDestroy(): void {
  //   throw new Error("Method not implemented.");
  // }
  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];
  popularMoviesSub: Subscription;
  singleMovie: Movie;
  //message = null;

  constructor(
    private moviesService: MovieService,
    //private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // const [
    //   drama,
    //   kids,
    //   popular,
    //   theaters
    // ] = this.route.snapshot.data['movie'];
    // this.bestDramaMovies = drama;
    // this.popularKidsMovies = kids;
    // this.popularMovies = popular;
    // this.inTheaterMovies = theaters

    this.popularMoviesSub =
    this.moviesService.getPopularMovies().subscribe(data => {
      //console.log('from compontent')
      this.popularMovies = data;
      // this.popularMovies = data['results'].slice(0, 6);
      // console.log('popular movies' + this.popularMovies);
      // this.singleMovie = this.popularMovies[0];
    });
    this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data;
      //console.log('in theaters' + this.inTheaterMovies);
    });
    this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data;
    });
    this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data;
    });

  }

  ngOnDestroy() {
    this.popularMoviesSub.unsubscribe();
  }

  // fromChild(event) {
  //  console.log(event);
  //  this.message = event; 
  // }

} 
