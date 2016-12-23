import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/movie.service';
import { Movie } from '../core/movie.model';

@Component({
    selector: 'movie-list',
    templateUrl: './movies-list.component.html'
})

export class MovieListComponent implements OnInit  {
    movies : Movie[];
    mode = 'Observable';
    errorMessage: string;
    constructor (private movieService: MovieService) {}
    ngOnInit() { this.getMovies(); }
    getMovies(){
        this.movieService.getMovies()
                        .subscribe(
                            movies => this.movies = movies,
                            error => this.errorMessage = <any>error);
    }
  
}
