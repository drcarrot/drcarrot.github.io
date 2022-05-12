import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPubsService {

  constructor(private http: HttpClient) { }

  getPublications() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('./assets/publications.json', { headers });
  }
}
