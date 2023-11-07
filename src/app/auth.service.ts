import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// I know im drunk rn. but what the heck is this login/register system?
// does it really need to be this complicated... you couldn't even describe
// how it really works.


@Injectable({
  providedIn: 'root'
})
export class Authservice {
  private apiServerUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    const url = `${this.apiServerUrl}/user/login`; 

    const loginData = {
        username: username,
        password: password
    };


    return this.http.post<any>(url, loginData);
  }
}