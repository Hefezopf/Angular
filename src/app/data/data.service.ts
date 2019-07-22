import { Injectable } from '@angular/core';
import { Contract } from './../api/contract';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private contract: Contract;

  constructor() {
    this.contract = new Contract();
    this.contract.type = "X";
  }

  getData(): Contract {
    console.log("getData...");

    return this.contract;
  }
}
