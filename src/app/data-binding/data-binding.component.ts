import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  numberOne:number=10;
  firstName:string="Ahmed";
  myId:string="thirdId";
  isDisabled:boolean=false;
  className:string="text-danger";
  hasError:boolean=false;
  isSpecial:boolean=true;

  messageClasses={
    "text-danger":this.hasError,
    "tex-success":!this.hasError,
    "text-special":this.isSpecial
  }

  myStyles={
    color:this.hasError?"red":"green",
    fontStyle:"italic"
  }

  ngOnInit(): void {
  }

}
