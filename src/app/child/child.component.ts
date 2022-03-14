import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // @Input()information:string="";

  @Input('information') myData:string="";

  @Output() childEvent=new EventEmitter();

  ngOnInit(): void {
  }

  sendData()
  {
    this.childEvent.emit(10);
  }

  whoAmI()
  {
    console.log("Im child")
  }

}
