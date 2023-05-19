import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private _httpClient: HttpClient) {}

  getAllDogs() {
    return this._httpClient
      .get(`${environment.baseUrl}/image/random/50`)
      .toPromise()
      .then((response: any) => {
        const dogs = response.message.map((dog: any) => {
          return {
            name: faker.name.firstName(),
            breed: dog.split('/')[4],
            image: dog,
          };
        });
        return dogs;
      });
  }

  getAllLabrador(name = '') {
    return this._httpClient
      .get(`https://dog.ceo/api/breed/labrador/images`)
      .toPromise()
      .then((response: any) => {
        const dogs = response.message.map((dog: any) => {
          return {
            name: faker.name.firstName(),
            breed: dog.split('/')[4],
            image: dog,
          };
        });
        return dogs;
      });
  }
}
