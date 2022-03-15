import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from 'src/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  _url:string="/assets/Data/employes.json";

  getAllEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server error")
    }));

    //return this.http.post(this._url,object)
  }
}
