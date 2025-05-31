import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BuslistService {

 private baseUrl = 'http://localhost:8080/api'; // Adjust if your backend port is different

  constructor(private http: HttpClient) {}

  searchBuses(from: string, to: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/buses/search?from=${from}&to=${to}`);
  }
}

