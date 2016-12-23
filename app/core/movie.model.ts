export class Movie{
    private _title : string;
    private _poster: string;
    private _year : number;
    private _imdbRating : number;
    constructor(title : string, poster : string, year : number, imdbRatint : number){
        this.Title = title;
        this.Poster = poster;
        this.Year = year;
        this.ImdbRating = imdbRatint;
    }
    get Title(){
        return this._title;
    }
    set Title(value : string){
        this._title = value;
    }
    get Poster(){
        return this._poster;
    }
    set Poster(value : string){
        this._poster = value;
    }
    get Year(){
        return this._year;
    }
    set Year(value : number){
        this._year = value
    }
    get ImdbRating(){
       return this._imdbRating;
    }
    set ImdbRating(value : number){
        this._imdbRating = value;
    }
}