import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  // Método para guardar datos en el localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Método para obtener datos del localStorage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Método para borrar un dato del localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Método para borrar todos los datos del localStorage
  clear(): void {
    localStorage.clear();
  }
}
