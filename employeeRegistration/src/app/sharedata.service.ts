import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employeedata } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
public apiUrl = "http://localhost:3000/employees/"


constructor(private httpClient: HttpClient) { }

//show all employee 
getEmployee(): Observable<Employeedata[]>{
  return this.httpClient.get<Employeedata[]>(this.apiUrl);
};

//save Employee into dbs
saveEmployee(formdata){
  return this.httpClient.post(this.apiUrl, formdata);
}

// get employee data by id
getEmployeeById(id){
  return this.httpClient.get(this.apiUrl+`/${id}`)
}

//edit employee data by id
updateEmployee(formdata,id){
  return this.httpClient.put(this.apiUrl+`/${id}`, formdata);
}

//delete employee by id
deleteEmployee(id){
  return this.httpClient.delete(this.apiUrl+`/${id}`);
}

}
