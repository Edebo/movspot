import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies/movies.service'
import {ToastrService} from '../services/common/toastr.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites:any[]
  totalFav:number
  constructor(private movieService:MoviesService,
    private toastr:ToastrService) { }

  ngOnInit() {
   this.favorites = this.movieService.getFavorite()
    this.totalFav = this.favorites.length
  }

}
