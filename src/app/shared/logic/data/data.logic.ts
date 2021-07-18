import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLogic {
  data = [];

  constructor() { }

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }
}
