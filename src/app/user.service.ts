import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap } from 'rxjs';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = 'http://localhost:8080'; 
  private loggedInUserId: number;

  constructor(private http: HttpClient) { }

  
  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(user);
    const url = `${this.apiServerUrl}/user/register`; 
    return this.http.post(url, user, { headers });
  }


 loginUser(user: any): Observable<any> {
    console.log(user);
    const url = `${this.apiServerUrl}/user/login`;
    return this.http.post(url, user);
  }

  
  getSessionId(): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/user/getCurrentUserId`);
  }

  getUserDetails(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiServerUrl}/user/get-user-details?id=${id}`)
  }

  changeProfilePic(id: number, url: string): Observable<string> {
    console.log('changeProfilePic called with ID:', id, 'URL:', url);
    const params = new HttpParams()
        .set('id', id.toString())
        .set('url', url);

    const options = { params: params };

    return this.http.post<string>(`${this.apiServerUrl}/user/change-profile-picture`, null, options);
  }


}