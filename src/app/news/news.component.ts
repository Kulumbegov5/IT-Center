import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Array<any>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getNews().then(result => {this.news = result;});;
  }

}
