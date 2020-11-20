import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;

  constructor(private employeeService: EmployeeService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(date => {
      this.gotoEmployeeList();
    },
    error => console.log(error));
  }

  gotoEmployeeList() {
    this.route.navigate(['/employees']);
  }
}
