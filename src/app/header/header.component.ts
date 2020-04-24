import { Component, OnInit } from '@angular/core';
import { OtherService } from '../other.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private otherservice:OtherService) {

   }

  ngOnInit() {
    this.otherservice.widthRegulating();
  }

}
