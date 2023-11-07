import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vinyl } from './vinyl';
// This file is gonna have to change too
// basically u messed the whole thing up

// *************************************
// IT HONESTLY COULD BE BETTER TO RESTART
// ALL OF THE CRUD AND USER STUFF. IT'S
// JUST THE FRONTEND LOGIC, IT'S SUCH A 
// MESS RN. ALL THE UI CAN STAY THE SAME.
// *************************************


@Injectable({
    providedIn: 'root'
})
export class VinylService {
    private apiServerUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public getVinyls(userId: number): Observable<Vinyl[]> {
        return this.http.get<Vinyl[]>(`${this.apiServerUrl}/vinyl/all?userId=${userId}`);
    }

    public addVinyl(userId: number, vinyl: Vinyl): Observable<Vinyl> {
        return this.http.post<Vinyl>(`${this.apiServerUrl}/vinyl/add?userId=${userId}`, vinyl);
    }

    public updateVinyl(vinyl: Vinyl): Observable<Vinyl> {
        return this.http.put<Vinyl>(`${this.apiServerUrl}/vinyl/update`, vinyl);
    }

    public deleteVinyl(vinylId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/vinyl/delete/${vinylId}`);
    }
    
}