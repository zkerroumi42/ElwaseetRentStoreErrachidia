import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  private apiUrl = 'http://16.171.162.113:8080/api/appartements'; 

  constructor(private http: HttpClient) {}

  // Récupérer les appartements depuis l'API
  getAppartements(): Observable<any[]> {
    const appartements = this.http.get<any[]>(this.apiUrl);
    return appartements; // Retourne l'Observable pour que le composant puisse s'abonner
  }
}
