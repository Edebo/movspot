import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl:string
  apiUrl = 'assets/config.json';
  search='man'
  // private movieTitle = new BehaviorSubject(this.search)
  constructor(private http:HttpClient) {
  }

  getMovies(){
    return this.http.get('http://www.omdbapi.com/?s=man&apikey=90187ac5')
  }

  getMovie(imdbID){
    return this.http.get(`http://www.omdbapi.com/?apikey=90187ac5&i=${imdbID}&plot=full`)
  }


  addToFavorite(movie){
    let favorite = []
    if(typeof window!==undefined){
        if(sessionStorage.getItem('favorite')){
            favorite=JSON.parse(sessionStorage.getItem('favorite'))
        }
       if (favorite.length==0 || favorite.filter(mov=>mov.imdbID === movie.imdbID ).length == 0){
        favorite.push(movie)
       }
        sessionStorage.setItem('favorite',JSON.stringify(favorite))

        return true
    }

    return false

  }

  getFavorite(){
    let favorite = []
    if(typeof window!==undefined){
        if(sessionStorage.getItem('favorite')){
            favorite=JSON.parse(sessionStorage.getItem('favorite'))
        }
    }
    return favorite;
  }
}
