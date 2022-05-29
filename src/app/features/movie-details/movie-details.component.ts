import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id: any;
  movieDetails: any;
  imgPrefix = "https://image.tmdb.org/t/p/w500/";
  topTenMovies = [];
  isLoaded = false;
  constructor(public _MovieService: MovieService, public _ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    
    // this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    // this._MovieService.getMovieDetails(this.id).subscribe(
    //   (data) => {
    //         this.movieDetails = data;
    //   }
    // )
    this._ActivatedRoute.params.subscribe(
      (data) => {

        this.id =  data.id;
        this._MovieService.getMovieDetails(this.id).subscribe(
          (data) => {
                this.movieDetails = data;
          }
        )
        scrollTo(0, 0);
      }

    )
    
    this._MovieService.getTrendingMovies().subscribe(
      (movies) => {
        for(let i = 0; i < 10; i++)
        {
          this.topTenMovies.push(movies.results[i]);
        }
      }
    )
    this.isLoaded = true;
  }

}
