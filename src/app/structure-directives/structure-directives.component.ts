import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.scss']
})
export class StructureDirectivesComponent implements OnInit {

  constructor() { }
  isAppeared:boolean=false;
  fullName:string="Samy Samir";
  isLoggedIn:boolean=true;
  carName:string="Verna";

  cars=["TIPO","LOGAN","KIA","SPORTAGE"];

  ngOnInit(): void {
  }

}
