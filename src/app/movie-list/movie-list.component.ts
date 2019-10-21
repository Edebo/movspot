import { Component, OnInit } from '@angular/core';
import {MoviesService }from '../services/movies/movies.service'
import {ToastrService} from '../services/common/toastr.service'
import {Search} from './movies.interface'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies :any []
  totalResults:Number
  response:string
  currentPage:Number
  pages:Number
  constructor(private moviesService:MoviesService,private toastr:ToastrService) {
   }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((data:Search) => {

      this.movies = data.Search
      this.totalResults = Number(data.totalResults)
      this.response = data.Response
      this.pages = this.numberOfPages(Number(data.totalResults))
    },error=>{
      console.log(error)
    }
  );
  }

  numberOfPages(total){
    const pages = total / 10

    console.log(pages)
    return pages
  }


  handleMovieClicked(movieName){
   this.toastr.success(movieName)
  }
  pageChanged(event){
    console.log(event);
    this.currentPage = event;
  }

}
