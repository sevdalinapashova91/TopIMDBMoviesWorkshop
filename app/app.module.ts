import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies-list/movies-list.component';
import { MovieShortComponent } from './movies-list/movie-short.component';
import { MovieService } from './core/movie.service';
import { Movie } from './core/movie.model';

@NgModule({
    declarations:[AppComponent, MovieListComponent, MovieShortComponent],
    imports: [BrowserModule, HttpModule],
    providers:[MovieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
