import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
  url:string="http://localhost:7580/api/Category"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  

  AuthenticateUser(body:any):Observable<any>

{



return this.http.post<any>(this.url+"/Authenticate",body,{observe:'response'});

}
}
}

