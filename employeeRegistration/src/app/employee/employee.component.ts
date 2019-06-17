import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup
  employeeData:any = [];

  constructor(private shareService: SharedataService, private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    });
   }

  ngOnInit() {
    this.shareService.getEmployee()
      .subscribe(m => this.employeeData = m);
  }

  saveEmployee(){
    this.shareService.saveEmployee(this.employeeForm.value)
      .subscribe(m =>  this.ngOnInit() )
  }

  onDeleteEmployee(id){
    this.shareService.deleteEmployee(id)
      .subscribe(res => this.ngOnInit());
  }

  onSubmitEmployee(){
    console.log(this.saveEmployee())
  }
}
