import { Component } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-list-dog',
  templateUrl: './list-dog.component.html',
  styleUrls: ['./list-dog.component.css'],
})
export class ListDogComponent {
  title = 'Protege los animales, brinda un hogar';
  description =
    'Descubre las razas de perros más interesantes y añade tus favoritas a la lista';

  dogs!: any[];

  favorites: any[] = [];
  mostrarNombre = false;

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getAllDogs().then((dogs: any[]) => {
      this.dogs = dogs;
    });
    const item = localStorage.getItem('dogs');
    this.favorites = item ? JSON.parse(item) : [];
  }

  searchElement(element: any) {
    const userFound = this.favorites.find((dog) => dog.image === element.image);
    return userFound;
  }

  toggleFavorite(dog: any) {
    debugger
    const item = localStorage.getItem('dogs');
    this.favorites = item ? JSON.parse(item) : [];
    if (this.searchElement(dog)) {
      this.favorites = this.favorites.filter(
        (favDog) => favDog.image !== dog.image
      );
    } else {
      this.favorites.push(dog);
    }

    console.log("perros fav: ", this.favorites);

    localStorage.setItem('dogs', JSON.stringify(this.favorites));
  }

  onMouseOver() {
    this.mostrarNombre = true;
  }

  onMouseLeave() {
    this.mostrarNombre = false;
  }
}
