import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListDogComponent } from './list-dog/list-dog.component';
import { ListFavoriteDogComponent } from './list-favorite-dog/list-favorite-dog.component';
import { ListLabradorComponent } from './list-labrador/list-labrador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dogs',
    component: ListDogComponent,
  },
  {
    path: 'favorites',
    component: ListFavoriteDogComponent,
  },
  {
    path: 'labrador',
    component: ListLabradorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
