import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenderRequestService {

 
  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<any> {
    return this.http.get<any>("https://smartxphones-backend.azurewebsites.net/vendor/request/");
  }

  getRequestById(id: string): Observable<any> {
    return this.http.get<any>(`https://smartxphones-backend.azurewebsites.net/vendor/request/${id}`);
  }


  deleteRequestById(id: any): Observable<any> {
    return this.http.delete(`https://smartxphones-backend.azurewebsites.net/vendor/request/delete/${id}`);
  }

  updateStatus(data:any):Observable<any>{
    return this.http.put(`https://smartxphones-backend.azurewebsites.net/vendor/request/update`,data);
  }

  addRequest(data:any):Observable<any>{
    return this.http.post(`https://smartxphones-backend.azurewebsites.net/vendor/request/add`,data);
  }

}