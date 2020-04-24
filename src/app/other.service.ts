import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  WidthMore1000=true;
 
  width=screen.width

  



  constructor() { }

  widthRegulating() {

    if(this.width<1000) {
      this.WidthMore1000=false;
    }
  }

}
