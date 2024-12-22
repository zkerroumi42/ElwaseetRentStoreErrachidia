import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  private apiUrl = 'http://localhost:8080/api/appartements'; // L'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer les appartements depuis l'API
  getAppartements(): Observable<any[]> {
    const appartements = this.http.get<any[]>(this.apiUrl);
    return appartements; // Retourne l'Observable pour que le composant puisse s'abonner
  }
}
