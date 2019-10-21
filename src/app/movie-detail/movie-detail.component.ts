import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies/movies.service'
import {ActivatedRoute} from '@angular/router'
import {ToastrService} from '../services/common/toastr.service'
import {Movie} from './movies.interface'
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie:any={
    Title:'',
Year: '',
Rated:'',
Released: '',
Runtime: '',
Genre: '',
Director: '',
Writer:'',
Actors: '',
Plot:'',
Language:'',
Country: '',
Awards: '',
Poster: '',
Ratings: [],
Metascore:'',
imdbRating:'',
imdbVotes:'',
imdbID:'',
Type:'',
DVD:'',
BoxOffice:'',
Production:'',
Website:'',
Response:''}
  title:string
  success:boolean
  constructor(private moviesService:MoviesService,
              private route:ActivatedRoute,
              private toastr:ToastrService) { }

  ngOnInit() {
  this.moviesService.getMovie(this.route.snapshot.params['id'])
    .subscribe(data=>{
          this.movie =data
    },error=>{
      console.log(error)
    }
    )
  }

  addToFavorite(){
   if(this.moviesService.addToFavorite(this.movie)){
    this.toastr.success('Movie successfully added')
   }
   else{
     this.toastr.error('Your broswer does not support storage')
   }


  }


}
