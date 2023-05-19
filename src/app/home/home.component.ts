import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  categories = [
    {
      name: 'Mascotas',
      path: 'dogs',
      image:
        'https://images6.alphacoders.com/678/678636.jpg',
      description:
        'Descubre una variedad de razas de perros y sus imágenes. Encuentra la raza perfecta para ti y conoce más sobre sus características',
    },
    {
      name: 'Favoritos',
      path: 'favorites',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Golden_Retriever_9-year_old.jpg/1200px-Golden_Retriever_9-year_old.jpg',
      description:
        'Guarda tus razas de perros favoritas en esta sección. Así, podrás acceder rápidamente a ellas la próxima vez que visites la aplicación.',
    },
    {
      name: 'Labrador',
      path: 'labrador',
      image:
        'https://p4.wallpaperbetter.com/wallpaper/339/20/921/dog-labrador-pet-retriever-wallpaper-preview.jpg',
      description:
        'Si eres fanático de los Labradores, esta sección es para ti. Descubre imágenes y datos interesantes sobre esta popular raza de perros.',
    },
  ];
}
