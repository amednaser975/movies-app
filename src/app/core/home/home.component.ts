import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies = [];
  trendingTv = [];
  imgPrefix = "https://image.tmdb.org/t/p/w500/";
  constructor(public _MovieService: MovieService) { }

  ngOnInit(): void {

    this._MovieService.getTrendingMovies().subscribe(

      (data) => {
        this.trendingMovies = data.results;
      },
      (error) => console.log(error)
    );

    this._MovieService.getTrendingTv().subscribe(

      (data) => {
        this.trendingTv = data.results;
      },
      (error) => console.log(error)
    );

  }

}
