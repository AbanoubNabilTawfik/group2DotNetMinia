import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employeeList:any=[];
  erroMessage:any;

  ngOnInit(): void {
    //this.employeeList=this.employeeService.getAllEmployees();
    this.employeeService.getAllEmployees().subscribe(
      employeeData=>
      {
        this.employeeList=employeeData;
      },error=>{
        this.erroMessage=error;
      })
  }

}
