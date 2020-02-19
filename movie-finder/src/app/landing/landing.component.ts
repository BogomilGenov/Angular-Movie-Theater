import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Movie from '../moduls/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
   @ViewChild('f', {static: true}) searchForm: NgForm
  searchedMovies: Movie[];

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  search(){
    const query = this.searchForm.value.query;
    // console.log(query);
    this.router.navigate(['movies/search'], {queryParams: {search: query} })
    this.movieService.searchMovie(query)
    .subscribe((data) =>{
      this.searchedMovies = data['results'];
    })
    // console.log("Here");
    
  }
}
