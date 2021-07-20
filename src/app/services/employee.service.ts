import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/employees' , {
      headers: new HttpHeaders().set('Authorization' , 'Bearer ' + token)});
  
  }

  getEmployeeById(id: number){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/employees/' + id , {
      headers: new HttpHeaders().set('Authorization' , 'Bearer ' + token)});
  }

  addAnEmployee(employee: any){
    let body = JSON.stringify(employee);
    return this.http.post('/server/api/v1/employees' , body, httpOptions);
  }

}
