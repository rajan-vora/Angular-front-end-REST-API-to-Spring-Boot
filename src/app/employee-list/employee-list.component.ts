import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();

  //   this.employees = [{
  //     "id": 1,
  //     "firstName": "Pam",
  //     "lastName": "Beesley",
  //     "emailId": "pam@office.com"
  //   },
  //     {
  //       "id": 2,
  //       "firstName": "Holly",
  //       "lastName": "Scoot",
  //       "emailId": "holly@office.com"
  //   }
  // ];
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    console.log(id);
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }

  viewEmployee(id: number) {
    console.log(id);
    this.router.navigate(['emp-details', id]);
  }
}
