// Приклад Angular сервісу
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private apiUrl = 'https://localhost:49736';

  constructor(private https: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200', // Add your Angular app's URL
    });
    const options = { headers: headers };
    return this.https.get(`${this.apiUrl}/api/HospitalMedicines`, options);
  }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.https.post(`${this.apiUrl}/api/HospitalMedicines/Create`, data, { headers });
  }
  
}
