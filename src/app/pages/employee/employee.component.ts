import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmployeeCardComponent, NgFor, RouterLink, EmployeeCardComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
employee: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public employeeInfo: any = [];

  async loadEmployeeInformation() {

    fetch("http://localhost:8080/api/employees/retrieve/all")
      .then(res => res.json())
      .then(data => {
        this.employeeInfo = data;
        console.log(data);

      });
  }

}
