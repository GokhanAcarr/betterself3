import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SleepRecordService {
  private apiUrl = 'https://backend-production-6a15.up.railway.app';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getSleepRecord(): Observable<{hours_slept: number | null}> {
    const headers = this.getAuthHeaders();
    return this.http.get<{hours_slept: number | null}>(`${this.apiUrl}/sleep-record`, { headers });
  }

  setSleepRecord(hours_slept: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/sleep-record`, { hours_slept }, { headers });
  }
}
