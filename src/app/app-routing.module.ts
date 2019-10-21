import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {FavoriteComponent} from './favorite/favorite.component'
// import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'movies/:id',component:MovieDetailComponent},
  {path:'movies',component:MovieListComponent},
  {path:'favorite',component:FavoriteComponent},
  {path:'user',loadChildren:'./user/user.module#UserModule'},
  // {path:'error',component:ErrorComponent},
  {path:'', redirectTo:'/movies', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
