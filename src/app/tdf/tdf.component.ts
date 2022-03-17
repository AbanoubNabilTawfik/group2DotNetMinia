import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }

  topics=["Angular","React" , "JavaScript"]
  userModel=new User("","abnabil@iti.gov.eg","","Angular",true);

  ngOnInit(): void {
  }
  submitData()
  {
    console.log(this.userModel);
  }

}
