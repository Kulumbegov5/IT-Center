import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  insertNews(id) {
    return this.afs.collection('news').doc(`${(10000000000000 - (new Date().getTime()))}`).set(id);
  }

  getNews() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/news').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

}
