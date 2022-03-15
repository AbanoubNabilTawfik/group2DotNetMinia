import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private emplyeeData:EmployeeService) { }

  employeeList:any=[]
  errorMessage:any;

  ngOnInit(): void {
    //this.employeeList=this.emplyeeData.getAllEmployees();
    this.emplyeeData.getAllEmployees().subscribe(
      data=>
      {
        this.employeeList=data;
      },
      errorData=>
      {
       this.errorMessage=errorData;
      }
    )
  }



}
