import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  isSub=true;
  constructor(private appService:AppService){
    this.appService.obs$.subscribe(x=>{
      console.log("from child subject",x)
    })

    this.appService.behaveObs$.subscribe(x=>{
      console.log("from childComponent BehaveSubject one",x)
    })
    }
    emit(){
      this.appService.sendData(Math.random());
      this.appService.sendBehaveData(Math.random());
      if(this.isSub){
        this.isSub=false;
        this.appService.behaveObs$.subscribe(x=>{
          console.log("from childComponent BehaveSubject two",x)
        })
      }
    }
}
