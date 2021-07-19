import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments: string[] = [
    'IT/DEV/IND',
    'IT/DEV/US',
    'OPER/MKT/IN',
    'OPER/MKT/US'
  ]
  empForm: FormGroup = new FormGroup({});

  validationMessage: string = '';

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      firstName: new FormControl('' , Validators.required),
      lastName: new FormControl('' , Validators.required),
      designation: new FormControl('' , Validators.required),
      manager: new FormControl('' , Validators.required),
      department: new FormControl('' , Validators.required),
      email: new FormControl('' , Validators.required),
      phone: new FormControl('' , Validators.required),
      extensionNo: new FormControl('' , Validators.required)
    })
  }

  submitRegistration(){
    if(this.empForm.valid) {
      this.empService.addAnEmployee(this.empForm.value).subscribe(
        data => {
          this.empForm.reset();
          this.validationMessage = "Employee is added to Organization. Thank you!";
          return true;
        },
        err => {
          return Observable.throw(new Error(""));
        }
      )
    }
    else{
      this.validationMessage = "Please fill out the form before submitting."
    }
  } 
  
}
