import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient: HttpClient) { }

  getTrendingMovies(): Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=0f61e6eb5dd60b6a59d7b333deba34a0');
  }
  
  getTrendingTv(): Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=0f61e6eb5dd60b6a59d7b333deba34a0');
  }

  getMovieDetails(id: number): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0f61e6eb5dd60b6a59d7b333deba34a0&language=en-US`);
  }
}
