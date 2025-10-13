import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  global(endpoint: string): Observable<any> {
    const url = `${environment.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }
}
