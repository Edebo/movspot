import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MoviesService} from './services/movies/movies.service'
import {NgxPaginationModule} from 'ngx-pagination';
import {ToastrService} from './services/common/toastr.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteComponent } from './favorite/favorite.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    NavbarComponent,
    MovieDetailComponent,
    FavoriteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [MoviesService,
    ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
