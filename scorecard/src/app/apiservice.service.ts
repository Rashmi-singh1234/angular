import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

apiUrl="http://localhost:4500/details";
loginurl="http://localhost:4500/login"
getAllData():Observable<any>
{

  return this._http.get(`${this.apiUrl}`);
}

createData(data:any):Observable<any>
{
  console.log("res==>",data);
  return this._http.post(`${this.apiUrl}`,data);

}

editData(data:any,id:any):Observable<any>
{
  console.log("res==>",data);
  let val=id;
  console.log(val)
  return this._http.put(`${this.apiUrl}/${val}`,data);

}
deleteData(id:any):Observable<any>
{
  let dId=id;
  console.log("recebv",dId);
  return this._http.delete(`${this.apiUrl}/${dId}`);
}

searchData(data:any):Observable<any>
{
  let dId=data;
  console.log("recebv",dId);
  return this._http.get(`${this.apiUrl}/${dId}`);
}


loginData(data:any):Observable<any>
{

  return this._http.post(`${this.loginurl}`,data,{responseType: 'text'});
}



getToken()
{
  return localStorage.getItem('token');
}


}
  
