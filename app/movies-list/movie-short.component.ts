import { Component, Input } from '@angular/core';
import { Movie } from '../core/movie.model';

@Component({
    selector: '[mvdb-movie-short]',
    templateUrl: `
        <td>
            <img [src]="movie.Poster" [alt]="movie.Title">
        </td>
        <td>
            {{movie.Title}}
        </td>
        <td>
            {{movie.Year}}
        </td>
        <td>
            {{movie.ImdbRating}}
        </td>
    `
})

export class MovieShortComponent{
   @Input() movie: Movie;
}
