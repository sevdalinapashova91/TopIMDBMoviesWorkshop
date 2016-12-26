import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../core/movie.model';

@Pipe({
    name: 'moviesFilter'
})

export class MoviesFilterPipe implements PipeTransform {
    transform(movies: Movie[], filterValue: string): Movie[] {
        if (!filterValue) {
            return movies;
        }

        return movies.filter(item =>
            item.Title.toLocaleLowerCase()
            .indexOf(filterValue) > -1);
    }
}