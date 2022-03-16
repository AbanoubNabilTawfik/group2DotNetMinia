import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  departments=[
    {"name":"Angular","id":1},
    {"name":"Node js", "id":2},
    {"name":"C#","id":3},
    {"name":"LINQ","id":4}
  ];
  deptId:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.deptId=params.get("id");
      //alert(this.deptId)
    });
  }

  goToDepartmentDetails(dept:any)
  {
    this.router.navigate(["/department",dept.id]);
  }

}
