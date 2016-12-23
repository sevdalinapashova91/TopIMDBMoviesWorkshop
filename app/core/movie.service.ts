import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie } from './movie.model';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MovieService {
  private heroesUrl = '../data/movies.json';
  constructor (private http: Http) {}
  getMovies (): Observable<Movie[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
