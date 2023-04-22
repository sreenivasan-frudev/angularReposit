import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  fromSub=null;
  // list=[6,1,2,3,4,5,6,7,8,9]
  // items=64627253486978;
constructor(private appService:AppService){
this.appService.obs$.subscribe(x=>{
  console.log("from appcomponent subject",x)
})

this.appService.behaveObs$.subscribe(x=>{
  console.log("from appcomponent BehaveSubject",x)
})

}

}
