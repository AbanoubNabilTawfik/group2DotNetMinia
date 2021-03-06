import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  parentInformation:string="Hello child from parent";
  dataFromChild:any;
  @ViewChild(ChildComponent) child= new ChildComponent();

  ngOnInit(): void {
   // this.child.whoAmI();
  }

  ngAfterViewInit()
  {
    this.child.whoAmI();

  }

}
