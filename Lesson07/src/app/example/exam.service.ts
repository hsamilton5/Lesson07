import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { 
    console.log("Ok, now this has been injected");
  }
}
