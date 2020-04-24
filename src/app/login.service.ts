import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged=false;

  constructor() { }

 login() {
   delay(1000);
   this.logged=true;
 }

 logout ():void{ 
   this.logged=false;
 }

}
