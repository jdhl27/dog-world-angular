import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-list-favorite-dog',
  templateUrl: './list-favorite-dog.component.html',
  styleUrls: ['./list-favorite-dog.component.css'],
})
export class ListFavoriteDogComponent {
  dogs!: any[];
  mostrarNombre = false;
  title = 'Tus favoritos';
  description = 'Tranquilo, sabemos que los amas a todos';

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const item = localStorage.getItem('dogs');
    this.dogs = item ? JSON.parse(item) : [];
    console.log(item);
  }

  searchElement(element: any){
    const userFound = this.dogs.find(dog => dog.image === element.image);
    console.log(userFound);

    return userFound
  }

  toggleFavorite(dog: any) {
    const item = localStorage.getItem('dogs');
    this.dogs = item ? JSON.parse(item) : [];
    if (this.searchElement(dog)) {
      this.dogs = this.dogs.filter((favDog) => favDog.image !== dog.image);
    } else {
      this.dogs.push(dog);
    }
    console.log("perros: ", this.dogs);

    localStorage.setItem('dogs', JSON.stringify(this.dogs));
  }

  onMouseOver() {
    this.mostrarNombre = true;
  }

  onMouseLeave() {
    this.mostrarNombre = false;
  }
}
