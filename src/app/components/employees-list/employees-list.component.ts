import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public employees:any;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.empService.getEmployees().subscribe(
      data => {
        this.employees = data;
      },
      err => {
        console.error(err);
      },
      () => console.log('All Employees listed!')
    )
  }

}
