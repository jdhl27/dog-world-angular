import { Component } from '@angular/core';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-list-labrador',
  templateUrl: './list-labrador.component.html',
  styleUrls: ['./list-labrador.component.css'],
})
export class ListLabradorComponent {
  title = 'Acá los queremos a todos';
  description =
    'Pero tenemos un espacio reservado para los labradores, un homanaje a Atenea';

    dogs: any[] | undefined;

    constructor(private dogService: DogService) {}

    ngOnInit(): void {
      this.dogService.getAllLabrador().then((dogs: any[]) => {
        this.dogs = dogs;
      });
    }
}
