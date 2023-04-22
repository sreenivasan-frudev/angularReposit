import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
private sub:Subject<number>;
obs$:Observable<number>;
private behaveSub:BehaviorSubject<number>;
behaveObs$:Observable<number>;
  constructor() {
    this.sub=new Subject<number>();
    this.obs$=this.sub.asObservable();
    this.behaveSub=new BehaviorSubject<number>(3000);
    this.behaveObs$=this.behaveSub.asObservable();
  }

sendData(data:number){
  this.sub.next(data)
}

sendBehaveData(data:number){
  this.behaveSub.next(data)
}



}
