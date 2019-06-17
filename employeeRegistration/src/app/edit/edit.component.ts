import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editEmployeeForm:FormGroup
  public filterEmployee:any = [];
  public id;

  constructor(private activatedRoute:ActivatedRoute, 
    private shareService: SharedataService, 
    private fb:FormBuilder, private router: Router) {
      this.editEmployeeForm = this.fb.group({
        name: [this.filterEmployee.name, [Validators.required]],
        email: [this.filterEmployee.email, [Validators.required]],
        number: [this.filterEmployee.number, [Validators.required]],
        designation: [this.filterEmployee.designation, [Validators.required]],
        salary: [this.filterEmployee.salary, [Validators.required]]
      });
     }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params.id;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.shareService.getEmployeeById(this.id)
      .subscribe(res => this.filterEmployee = res)
  }


  onUpdateEmployee(){
    this.shareService.updateEmployee(this.editEmployeeForm.value, this.id)
      .subscribe(res => { 
        this.editEmployeeForm.reset()
       this.router.navigate(['/']) 
      });
    }
}
