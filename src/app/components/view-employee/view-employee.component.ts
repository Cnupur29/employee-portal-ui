import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  public employee : any;
  constructor(private empService: EmployeeService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployee(this.route.snapshot.params.id);
  }

  getEmployee(id:number) {
    this.empService.getEmployeeById(id).subscribe(
      data => {
        this.employee = data;
      },
      err => {
        console.error(err);
      },
      () => console.log('Employee Found!')
    )
  }
}
