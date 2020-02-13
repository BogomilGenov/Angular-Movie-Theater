import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Movie from '../moduls/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie; 

  @Output()
  clickButtonEmitter: EventEmitter<number> = new EventEmitter<number>(); 
  imagePath: string; 
  constructor() { }

  ngOnInit() {
    //console.log(this.movie.poster_path + 'ok from child');
    this.imagePath = 'http://image.tmdb.org/t/p/w500' + this.movie.poster_path; 
  }

  clickButton(){
    console.log('button with id - ' + this.movie.id);
    this.clickButtonEmitter.emit(this.movie.id);
  }

}
