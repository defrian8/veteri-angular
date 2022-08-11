import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeterService {

  constructor(private http: HttpClient) { }

  appointment() {
    return this.http.get('http://localhost:5062/api/Appointment');
  }
}
