import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component ({
selector: 'app-signing',
templateUrl: './signing.component.html',
styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {

constructor(
private location: Location
) { }

ngOnInit() {
}

goBack(): void {
this.location.back();
}
}
