import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListResolver } from './services/resolvers/movie-list.resolver';


const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'movies'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/search', component: MovieSearchComponent, resolve: { movies: MovieListResolver}},
  {path: 'movies/:id', 
  component: MovieDetailsComponent, 
  resolve: {singleMovie: SingleMovieResolver}
  }
];  

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
